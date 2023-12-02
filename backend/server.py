from flask import Flask
from datetime import datetime


app = Flask(__name__)


@app.route('/data')
def get_time():
	# Returning an api for showing in reactjs
	return {
		'name':"Pippo", 
		"age":102,
		"date":datetime.now().isoformat()
		}

	
if __name__ == '__main__':
	app.run(debug=True)
