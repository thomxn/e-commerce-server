FROM mongo

ARG MONGO_USERNAME
ARG MONGO_PASSWORD

COPY products.json /products.json
CMD mongoimport --host mongodb --username ${MONGO_USERNAME} --password ${MONGO_PASSWORD} --authenticationDatabase admin --db ecommerce --type json --file ./products.json --jsonArray