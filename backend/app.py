import os
from flask import Flask
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
app.config['JWT_SECRET_KEY'] = os.getenv('JWT_SECRET_KEY', 'dev-secret-key-change-me')
app.config['JWT_ACCESS_TOKEN_EXPIRES'] = 3600 * 24 * 7
JWTManager(app)

from database import init_db
from auth_module import auth_bp
from academic_module import academic_bp
from career_module import career_bp

CORS(app, origins="*",
     allow_headers=["Content-Type", "Authorization"],
     methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"],
     expose_headers=["Content-Type"])

# Register blueprints
app.register_blueprint(auth_bp)
app.register_blueprint(academic_bp)
app.register_blueprint(career_bp)


@app.route('/', methods=['GET'])
def index():
    return {
        'status': 'ok',
        'app': 'StudyTrack API',
        'message': 'Backend is running. Use /api/health or the frontend at http://localhost:5173.',
        'endpoints': {
            'health': '/api/health',
            'login': '/api/auth/login',
            'register': '/api/auth/register',
            'me': '/api/auth/me',
        },
    }


@app.route('/api', methods=['GET'])
def api_index():
    return {
        'status': 'ok',
        'message': 'StudyTrack API is running.',
        'health': '/api/health',
    }


@app.route('/api/health', methods=['GET'])
def health():
    return {'status': 'ok', 'app': 'StudyTrack API', 'version': '1.0.0'}

if __name__ == '__main__':
    init_db()
    print("=" * 50)
    print("  StudyTrack API Server")
    print("  Running on http://localhost:5000")
    print("=" * 50)
    app.run(debug=True, host='0.0.0.0', port=5000)
