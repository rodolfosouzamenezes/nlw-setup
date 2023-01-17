import fastify from "fastify";

const port = 3333;
const app = fastify();

app.get('/', () => {
  return 'Hello'
})

app.listen({ port }).then(() => {
  const brightCode = '\x1b[1m';
  const greenCode = '\x1b[32m';
  const resetCode = '\x1b[0m';

  console.log(
    brightCode + greenCode + 
    '[SUCCESS] ' + resetCode + greenCode + 
    `Server is running: http://localhost:${port}/` + resetCode
  )
})