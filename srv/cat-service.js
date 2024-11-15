module.exports = (srv) => {
    srv.on(
        'READ'
        ,
        'Books'
        , async (req) => {
            return [{
                ID: 1, title:
                    "Wuthering Heights"
                , author:
                    "Emily Brontë"
                , stock: 100
            }, {
                ID: 2, title:
                    "Jane Eyre"
                , author:
                    "Charlotte Brontë"
                , stock: 50
            }];
        });
}
