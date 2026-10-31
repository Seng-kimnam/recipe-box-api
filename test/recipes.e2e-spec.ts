import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import request from 'supertest';
import { AppModule } from '../src/app.module';

describe('Recipes (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleRef.createNestApplication();
    app.useGlobalPipes(new ValidationPipe()); // main.ts doesn't run in tests
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('GET /recipes returns 200', () => {
    return request(app.getHttpServer()).get('/recipes').expect(200);
  });

  it('POST /recipes without a token returns 401', () => {
    return request(app.getHttpServer())
      .post('/recipes')
      .send({ title: 'Do pizza' })
      .expect(401);
  });

  it('register, log in, then create a recipe with the token', async () => {
    const email = `test${Date.now()}@example.com`;
    const password = 'supersecret123';

    await request(app.getHttpServer()).post('/auth/register').send({ email, password });

    const login = await request(app.getHttpServer()).post('/auth/login').send({ email, password });
    const token = login.body.accessToken;
    expect(token).toBeDefined();

    const created = await request(app.getHttpServer())
      .post('/recipes')
      .set('Authorization', `Bearer ${token}`)
      .send({ title: 'Written by a test' })
      .expect(201);

    expect(created.body.title).toBe('Written by a test');
  });
});