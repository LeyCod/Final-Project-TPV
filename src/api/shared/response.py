from flask import jsonify

def success_response(data, status = 200):
    return jsonify(data), status

def error_response(err, status = 500):
    return jsonify(err), status
