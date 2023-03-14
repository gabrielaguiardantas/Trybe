const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../src/app');
const sinon = require('sinon');
const fs = require('fs');

chai.use(chaiHttp);

const { expect } = chai;

const mockFile = JSON.stringify({ 
    brands: [
      {
        id: 1,
        name: 'Lindt & Sprungli',
      },
      {
        id: 2,
        name: 'Ferrero',
      },
      {
        id: 3,
        name: 'Ghirardelli',
      },
    ],
    chocolates: [
      {
        id: 1,
        name: 'Mint Intense',
        brandId: 1,
      },
      {
        id: 2,
        name: 'White Coconut',
        brandId: 1,
      },
      {
        id: 3,
        name: 'Mon Chéri',
        brandId: 2,
      },
      {
        id: 4,
        name: 'Mounds',
        brandId: 3,
      },
    ],
  });


describe('Testando a API Cacau Trybe', function () {
    
    beforeEach(function () {
        sinon.stub(fs.promises, 'readFile')
          .resolves(mockFile);
      });
    afterEach(function () {
        sinon.restore();
      });
    describe('Usando o método GET em /chocolates', 
    
    function () {
        it('Retorna a lista completa de chocolates!', async function () {
            const response = await chai.request(app).get('/chocolates');
            
            expect(response.status).to.be.equal(200);

            const output = [
            { id: 1, name: 'Mint Intense', brandId: 1 },
            { id: 2, name: 'White Coconut', brandId: 1 },
            { id: 3, name: 'Mon Chéri', brandId: 2 },
            { id: 4, name: 'Mounds', brandId: 3 },
            ];
            expect(response.body.chocolates).to.deep.equal(output);
        });
    });
    describe('Usando o método GET em /chocolates/:id para buscar o ID 4', function () {
        it('Retorna o chocolate Mounds', async function () {
          const response = await chai
            .request(app)
            .get('/chocolates/4');
    
          expect(response.status).to.be.equal(200);
          expect(response.body.chocolate).to.deep.equal(
            {
              id: 4,
              name: 'Mounds',
              brandId: 3,
            });
        });
      });
    
      describe('Usando o método GET em /chocolates/:id para buscar o ID 99', function () {
        it('Retorna status 404 com a mensagem "Chocolate not found"', async function () {
          const response = await chai
            .request(app)
            .get('/chocolates/99');
    
          expect(response.status).to.be.equal(404);
          expect(response.body).to.deep.equal({ message: 'Chocolate not found' })
        });
      });
    
      describe('Usando o método GET em /chocolates/brand/:brandId para buscar brandId 1', function () {
        it('Retorna os chocolates da marca Lindt & Sprungli', async function () {
          const response = await chai
            .request(app)
            .get('/chocolates/brand/1');
    
          expect(response.status).to.be.equal(200);
          expect(response.body.chocolates).to.deep.equal([
            {
              id: 1,
              name: 'Mint Intense',
              brandId: 1,
            },
            {
              id: 2,
              name: 'White Coconut',
              brandId: 1,
            },
          ]);
        });
      });

    // exercício 1
    describe('Usando o método GET em /chocolates/total para buscar todos os tipos de chocolate', function () {
        it('Retorna a quantidade de tipos de chocolate', async function () {
          const response = await chai
            .request(app)
            .get('/chocolates/total');
            // console.log(response.body.chocolate);
          expect(response.status).to.be.equal(200);
          expect(response.body).to.deep.equal({ totalChocolates: 4});
        });
    });

    // exercício 3
    describe('Usando o método GET em /chocolates/search para buscar os chocolates cujo nome inclui o que está sendo pesquisado', function () {
        it('Retorna os chocolates cujo nome inclui o termo pesquisado', async function () {
          const response = await chai
            .request(app)
            .get('/chocolates/search?name=Mo');
          expect(response.status).to.be.equal(200);
          expect(response.body).to.deep.equal([
            {
              id: 3,
              name: 'Mon Chéri',
              brandId: 2,
            },
            {
              id: 4,
              name: 'Mounds',
              brandId: 3,
            },
          ]);
        });
        it('Retorna um array vazio ao não encontrar nenhum chocolate', async function () {
          const response = await chai
            .request(app)
            .get('/chocolates/search?name=ZZZ');
  
          expect(response.status).to.be.equal(404);
          expect(response.body).to.deep.equal([]);
        });
    })
    // exercício 5
    describe('Usando o método PUT em /chocolates/:id para atualizar um chocolate buscando pelo seu id', function () {
      it('Retorna o chocolate alterado com as novas informações adicionadas no body', async function () {
        const response = await chai.request(app).put('/chocolates/1').send({
          name: 'Mint Pretty Good',
          brandId: 2,
        });

        expect(response.status).to.be.equal(200);
        expect(response.body).to.be.equal({
          chocolate: { 
            id: 1,
            name: "Mint Pretty Good",
            brandId: 2
          }
        })
      })
      it('Retorna uma mensagem de não encontrado caso o id esteja incorreto', async function () {
        const response = await chai.request(app).put('/chocolates/555').send({
          name: 'Mint Pretty Good',
          brandId: 2,
          });

        expect(response.status).to.be.equal(404);
        expect(response.body).to.be.equal({
          message: "chocolate not found"
          })
      })
    })
});
