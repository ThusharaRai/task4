using my.bookshop as my from '../db/schema';
 
@requires: 'authenticated-user'
service CatalogService @(path: '/catalog') {
    entity Books as projection on my.Books;
}
 
 