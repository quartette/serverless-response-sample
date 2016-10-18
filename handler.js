'use strict';

/**
 * 正常レスポンス。ステータスコード200を返します
 */
module.exports.ok = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({message: 'Go Serverless v1.0! Your function executed successfully!'})
  };
  return callback(null, response);
};

/**
 * ステータスコード400を返します。バリデーションエラーなど
 */
module.exports.badrequest = (event, context, callback) => {
  const errors = {
    email: 'email require',
    password: 'must have length greater than or equal to 6'
  }
  const response = {
    statusCode: 400,
    body: JSON.stringify(errors)
  };
  return callback(null, response);
};

/**
 * 302リダイレクトをします。
 */
module.exports.redirect = (event, context, callback) => {
  const response = {
    statusCode: 302,
    headers: {
      'Location': 'https://google.co.jp/'
    }
  };
  return callback(null, response);
};

/**
 * htmlコンテンツを返します。ステータスコード200以外でもhtmlを返せます。
 */
module.exports.html = (event, context, callback) => {
  const response = {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html;charset=UTF-8'
    },
    body: '<!DOCTYPE html><html lang="ja"><title>serverless-response-sample</title><body><h1>html response</h1><p>hello serverless!</p></body></html>'
  };
  return callback(null, response);
};
