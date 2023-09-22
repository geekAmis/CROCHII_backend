from app import app
from typing import Annotated
from fastapi import Query
from fastapi.responses import HTMLResponse


login_page = '/login'
registration_page = '/registration'

@app.get(f'{login_page}')
async def root(
		user_id: Annotated[ int | None, Query(min_length=1, max_length=10)] = None #, pattern="^fixedquery$"
	):

	if not user_id:
		with open('frontend/templates/Login.htm','r',encoding='UTF-8') as content:
			return HTMLResponse(content=content.read().replace('REGISTRATION_PAGE',registration_page))

@app.get(f'{registration_page}')
async def registration_user(
		login : Annotated[ str | None, Query(min_length=3,max_length=50)] = None,
		password : Annotated[ str | None, Query(min_length=6,max_length=50,alias="pwd")] = None,
	):

	if not login and not password:
		with open('frontend/templates/registr.html','r',encoding='UTF-8') as content:
			return HTMLResponse(content=content.read().replace('LOGIN_PAGE',login_page))


@app.get('/sing-in/')
async def sing_in(
	login : Annotated[ str | None, Query(min_length=3,max_length=50)] = None,
	password : Annotated[ str | None, Query(min_length=6,max_length=50,alias="pwd")] = None,
	Send : Annotated[str | None, Query(pattern="^OnClickButton$")] = None
	):

	items = {}
	
	if login and password and Send:
		items["data"] = {"login": login,"password": password,"Send": Send}

	if not login:
		items["login"] = "NotFound"

	if not password:
		items["password"] = "NotFound"

	if not Send:
		items["Send"] = "NotFound"

	return items