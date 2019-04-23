const db = require('../../models/db');


class UsersController {

  static async register(ctx) {
    const {
      first_name,
      email,
      last_name,
      phone_number,
      is_admin,
      password 
    } = ctx.request.body;
    
    let newUser;

    try {
      newUser = await db.query(
        `insert into koaschema.users(first_name, email, last_name, phone_number, is_admin, pass)
        values($1, $2, $3, $4, $5, $6)
        RETURNING id, email, is_admin`,
        [ first_name, email, last_name, phone_number, is_admin, password ]
      );
      ctx.status = 201;
      ctx.body = {
        status: true,
        response: newUser.rows,
        message: 'User signed up successful',
      };
    } catch (error) {
      ctx.status = 409;
      ctx.body = {
        status: 'error',
        message: error.detail
      };
    }
  };

  static async signin(ctx) {
    let user;
    try {
      user = await db.query(
        `select * from koaschema.users where email=$1 and pass=$2`,
        [ ctx.request.body.email, ctx.request.body.password ]
      );
      ctx.status = 200;
      ctx.body = {
        status: true,
        response: user.rows,
        message: 'User signed in successful',
      }
    } catch (error) {
      ctx.status = 404;
      ctx.body = {
        status: 'error',
        message: error.detail
      };
    }
  };

  static async users(ctx) {
    let users;

    try {
      users = await db.query(`select * from koaschema.users`);
      ctx.body = {
        status: true,
        users: users.rows
      };
    } catch (error) {
      ctx.body = {
        status: 'error',
        message: error.detail
      };
    }
  };

  static async user(ctx) {
    let user;
    try {
      user = await db.query(
        `select * from koaschema.users where id=$1`,
        [ ctx.params.id ]
      )
      ctx.status = 200;
      ctx.body = {
        status: true,
        user: user.rows
      }
    } catch (error) {
      ctx.body = {
        status: false,
        message: error.detail
      };
    }
  }
}


module.exports = UsersController;
