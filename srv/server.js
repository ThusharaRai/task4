const cds = require('@sap/cds');
const xsenv = require('@sap/xsenv');
const passport = require('passport');
const { JWTStrategy } = require('@sap/xssec');
 
cds.on('bootstrap', app => {
    // XSUAA Middleware
    passport.use(new JWTStrategy(xsenv.getServices({uaa:{tag:'xsuaa'}}).uaa));
    app.use(passport.initialize());
    app.use(passport.authenticate('JWT', { session: false }));
});