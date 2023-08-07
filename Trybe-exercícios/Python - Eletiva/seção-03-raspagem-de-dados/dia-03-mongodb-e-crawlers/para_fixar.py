# Recuperando dados - MongoDB

# db.places
#   .find({'address.country':'Spain'})
#   .sort({'_id':1}) <-- resposta do exercicio 1
#  db.places
#   .find({'address.country':'United States'})
#   .count() <-- resposta do exercicio 2

# Inserindo dados - MongoDB

# db.places.insertMany([
# { _id:101, name:'Casa Minha', description:'Eu comprei e meteli'},
# { _id:102, name:'Casa Nossa', description:'Você comprou, nós usamos'},
# {_id:103, name:'Casa sua', description:'Você comprou, você usou'}
# ])

# Atualizando dados - MongoDB

# db.places.updateOne(
# {_id:12},
# {$set: { "review_scores.review_scores_rating":65}}
# )
# db.places.updateMany(
# {"host.host_name":"José Edmílson"},
# {$set: {"host.host_identity_verified":true}}
# )
