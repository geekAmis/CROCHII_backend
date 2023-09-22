# Сервис <CRoChII>

(Маленький аналог WB)
Цели:
	```
	АИС (Автоматизированная Информационная Система)
	- Подбор по различным критериям товара наиболее подходящего пользователю.
	- Сбор метрики и статистики по посещению страниц товаров.
	- Преобразование собранной статистики пользователей в структурированный документ на основе которого владелец сможет планировать дальнейшее развитие проекта
	- Сбор информации о текущем местоположении доставщиков товаров и рассчёт примерного времени прибытия на обобщённых данных расстояния и скорости езды от одного пункта выдачи к другому
	- Отсеивание ботов со статистики и подробный лог действий особо активных пользователей на основе кол-ва запросов за единицу времени (если больше 200+-60 в минуту ,то действия пользователя попадут в лог "Warning", если выше 500 +- 50 в минуту, то в лог "Danger" для последующего принятия решения о временной блокировке.)
	- Сбор обратной связи от покупателей достигаемый предложениями о различных бонусах за некое количество отзывов (Скидки или бесплатная побрикушка, например за 5 купленных товаров и 5 оставленных отзывов покупатель сможет получить брелок и наклейки с понравившемся персонажем японских мультиков.)
	- Система рекомендаций наиболее популярного товара в интересующих пользователя категориях и ценовом сегменте.

	Главная цель проекта заключающая в себе всё выше перечисленное:
		Независимая от сторонних компаний (Стабильная) АИС в которой у владельца всегда первые места в выдаче, отсутствие надобности отдавать % подобным сервисам , свои собственные, не навязанные акции и возможность публиковать на своих условиях товары других пользователей.
		Полный контроль за всем на ресурсе.
	
	Основное взаимодействие с сервисом предполагается через мобильное приложение или сайт,
	для разработчиков же будет возможность интегрировать через тот-же api данные с сервиса в свои АИС.
	```

## Требования к функционалу

```
Пояснение:
	PK в xls = PRIMARY KEY
	NN в xls = NOT NULL
	Def в xls = Default

	?? перед требованием к функционалу - Функция, от которой можно отказаться или вернуться к ней после завершения остальной части проекта
```

```
	Разграничение прав доступа пользователей сервиса на группы (В порядке возрастания): 
		- Гостя (не вошедшего в аккаунт пользователя),
		- Покупателя (вошедшего в аккаунт пользователя),
		- SEO-менеджера (вошедший в аккаунт пользователь с доступом к метрике, сторонние разработчики),
		- Delivery (Отдельная группа пользователей, которая имеет доступ только к опр. части сайта) и делятся на 3 типа:
			-- Delivery-start (Занимается перевозкой)
			-- Delivery-stat (Занимается статистикой и менеджментом)
			-- Delivery-Admin (HR и Delivery-stat и SEO-менеджер)
		- Продавца (вошедший в аккаунт пользователь с правами SEO-менеджера и возможностью добавлять в очередь на публикацию свой товар.),
		- Модератора (вошедшего в аккаунт пользователя с доступом к просмотру, отправку на доработку и публикацию товаров из очереди, курирование споров покупателя с продавцом и возможность их закрывать на основе правил установленных вышестоящими в иерархии пользователями (Админ, Владелец) и указанными в разделе "Rules", рядовой сотрудник),
		- Администратора (вошедшего в аккаунт пользователя с доступом к назначению в группу модераторов, а так-же снятию с неё. Полный доступ ко всем функциям предыдущих групп. Иначе говоря: HR менеджер)
		- Владелец (вошедшего в аккаунт пользователя с полным доступом ко всем функциям сервиса)

	Вне системная группа пользователей:
		- Тестировщик/гл.разработчик (доступ ко всем возможностям сервиса благодаря полному доступу к серверу|root)

	Возможность формировать .xls таблицу метрики пользователей:
		|NN ID (integer)|PK Login (string)| Address (string)|NN View Time (DATE)|NN Product ID (string)|NN Price (float)|NN Category ID (integer)|NN Product Owner user ID (integer)| CreateDeliveryOrder (bool) | Delivery link (string)|
	
	Возможность формировать .xls таблицу статистики товара: 
		|PK Product ID (integer)|NN Category ID (integer)|NN Name (string)|(PK) NN Main Picture address (FILE or string:path)|NN Owner user ID (integer)|NN PriceNow (float)|Sale % (integer)|NN Price History (dict [{"unixDate":INT,"price":INTEGER,"sale_percent"INTEGER,"priceWithSale": FLOAT}])| Descryption (Varchar(5559))|Count (INTEGER)| DeliveryInfo (dict: [{"PK_Delivery ID":String,"countIn":INTEGER,"sold_onload":INTEGER,"NN_DeliveryName":String,"AverageDeliveryTimeDays":INTEGER}]) OR (dict: [{"PK_DELIVERY ID": "Samovivoz","countIn":INTEGER,"sold_onload":INTEGER,"NN_DELIVERYNAME":"Самовывоз"}])| Views (BigInteger)|NN PK CommentsDict id (Varchar(300))|NN PK RatingDict id (Varchar(300)) | PK NN MorePicturesList id (Varchar(100))|Sold (Integer)|NN CreateDate Unix (INTEGER)| NN CanPostAdvert (bool) | AverageDeliveryTimeDays (INTEGER) | LooseDispute (INTEGER) |Def=0 CanView (bool)|PK NN SpecificateHash alias SHLink (varchar(777))|
	
	Возможность принимать от доставщиков информацию о местоположении , количестве оставшегося пути, количестве товара в транспорте, оправданиях задержек в пути.
	
	Возможность пользователю отменять/вернуть/отправить замену заказа по текущим условиям владельца сервиса. (Точнее создать "Спор" с Owner товара, который будет курировать Модератор)
	
	Возможность получить частичную или полную информацию о товаре в зависимости от группы к которой относится пользователь
	
	Возможность изменения Owner-продавцом информации о товаре после публикации в выбранной ветке товара будет невозможна, но примерно как у git можно будет создать что-то вроде нового branch ,где продавец снова сможет выставить свои изменения на рассмотрение Модераторам. (Эта система призвана устранить ошибки конкурентного сервиса, как WB в неправильных скидках или ценах, но изменения описания или картинок можно делать без одобрения модерации)

	Возможность написать по любой причине Модераторам сервиса. (Соответственно, система сообщений между пользователем и модераторами по типу "споров", но без продавца)

	Возможность фильтровать выдачу товаров по категории, цене, количеству на складе, рейтингу, количеству комментариев (больше 0|Не важно), количеству просмотров и индексу популярности, который складывается таким образом: Рейтинг * Количество просмотров * Количество комментариев / 1+(количество проигранных продавцом споров * (Первоначально установленную цену со скидкой - Текущую цену со скидкой), при этом скидка может быть и нулевой в любом из случаев)

	Возможность получить выдачу только рекомендуемых товаров в текущей категории (С самым высоким идексом популярности у тех товаров в которых совпадает хотя-бы одно слово в названии с предыдущими просмотрами пользователя.)

	Возможность группам назначать/снимать других нижестоящих в иерархии групп (с Модератора до тестировщика/гл.разработчика).

	Возможность Модератору и вышестоящим в иерар. снимать товары с выдачи (делать неотображаемыми), в том числе владелец товара тоже имеет эту возможность.

	Возможность создавать ветки изменения товара (что-то вроде branch в git) администратору в любом аккаунте продавца (Например, для массовых акций)

	Возможность продавцу устанавливать доступные ему delivery к товару.

	Возможность всем выше гостя просматривать количество товара на складе, динамику цен и "Рейтинг сервиса" (Индекс популярности)

	Возможность ГОСТЮ создать аккаунт на сервисе.

	Возможность ВЛАДЕЛЬЦУ выгрузить список информации о пользователях в xls:
	|PK NN User ID (integer)|NN FirstName|NN LastName|NN SurName|NN FullName (f"{LastName} {FirstName} {SurName}")|NN ShortName (f"{LastName} {FirstName[0]}.{SurName[0]}. ")|PK NN LoginHash (md5(Varchar(50)))|NN Password Hash (md5(Varchar(70)))|Solds Count (INTEGER)|AllMoneySend (VARCHAR(20))|NN Address (STRING)|card_number (varchar(12))|card_date (date)|card_cvv (varchar(2))|PK card (int(card_number)+unixDate(card_date)*int(card_cvv))| ViewThisDict dict([{"PK_product_data":dict,"unix_time_view":INTEGER,"Comment id": INTEGER,"USER_SEND_RATE": rangeint(0..10)}])|WinDispute Count (Integer)|DisputeIds_list (list:integer)| WaitDelivery_WaitUser dict([{"product_data":dict,"PK_Delivery ID":Integer,"Address":String,"SecretCode": STRING,"status":inrange["Оформляется","Погружается","Выезжает к вам","В пути","Разружается на местном складе","Ожидает вас в пункте выдачи","Куплен","Возврат","В споре","Изъят на таможне","Ожидает вас на складе (Самовывоз)"]}])| UsedPromo_list (list:string)| ActivePromocode (dict({"promocode ID":INTEGER,"usedTime":UNIXDATE}))|if TelegramID (INTEGER) > PK else > Def=-1|PK NN API (String(md5(LoginHash+UserID+Salt(randomInt(100,10000)))[0:70]+LoginHash[randomInt(0,3)]+CartID))|NN Def=False (bool)|Passport seria_num (STRING:FLOAT) Def="-1000.100000"|PK NN Cart ID (varchar(170))|

	Возможность Администраторам создавать странички delivery (Будет создана отдельная ссылка пройдя по которой будет открыта форма авторизации доставщика, в ней доставщик сможет ввести полученый от админа логин и пароль тем самым попасть на свою страничку ) с фу-ями:
		(Delivery-stat) Просмотра заявок на подключение доставщика к определённому продавцу.
			Возможность как принять, так и отказаться.
		
		(Delivery) Просмотра адресов складов или производств (указанного места сбыта товара продавцом).
		(Delivery) Просмотр адресов пунктов выдачи и расстояния между ними.
		(Delivery-stat) Воможность создавать запрос к delivery-start на перевозку.
		(Delivery-start) Возможность брать запрос на перевозку. (Возможности отказаться не предусмотренно логическими соображениями)
		(Delivery-stat) Возможность (скорее требование) получение от системы(DeliveryNeedForSpeed) точного количества товара, веса одной единицы товара, конечного адресата пункта выдачи каждого товара и оптимального времени прибытия по мнению системы.
		(Delivery-admin) Возможность создавать и удалять ссылки вида /delivery/{ownerAPI}/{DeliveryAdminApi[0:30]/{NewDeliveryUserAPIKey}
		(Delivery-admin) Возможность удалять пользователей из системы.
		(Delivery-stat) Выдача полной статистики по загруженному и отгруженному товару, времени затраченном на перевозку из пункта X в пункт X, отзыв пользователей о качестве доставки, о всех "казусах" во время транспортировки, о том кто конкретно вёз груз из пункта X в пункт X и о времени начала и о времени конца транспортировки.
		(Delivery-start) Требование к отправке текущего местоположения во время работы или ожидания запроса на перевозку.
		(Delivery-start) Возможность получить рассписание работы составленное Delivery-stat
		(Delivery-stat) Возможность составления рассписания работы.
	
	Возможность продавцу указывать в способе доставки "Самовывоз" под id доставки устанавливая "Samovivoz", если будет только этот способ доставки, то количество товара всего у продавца = количеству товара у доставщиков("Samovivoz") на складе, в ином случае общее количество считается из количества товара у доставщиков (может быть 0 и в случае, если складов у них нет) и на складе продавца (если его нет, Def=0).

	Возможность Модераторам отправлять запрос на оплату товара.

	Возможность модераторам проверять верность code товара у покупателя в пункте выдачи.

	Возможность формировать QR code товара для сканирования в пункте выдачи.

	Возможность Всем в группе Модератор и выше по иерар. просматривать Dispute всех пользователей и отвечать на них.

	Возможность им же (см. выше) видеть время отправки сообщений.

	Возможность им же (см. выше) видеть loginHash ответивших на сообщения пользователя. (даже если это  продавец в диспуте с пользователем.)

	??Автоматическая система очистки Dispute сообщений по истечению 1-ого года с момента закрытия.

	??Автоматическая система очистки комментариев у товара, которые были написаны больше 5-и месяцев назад И не имели приложенных картинок.

	??Возможность ввести в своём профиле промокод дающий +% к скидке на товарах.

	Возможность написать боту сервиса и в дальнейшем подтверждать вход в аккаунт через него (подробнее ниже по тексту)

	Возможность пользователю добавлять понравившиеся товары в корзину и редактировать её позже.

	Возможность открыть свой профиль и настроить такие параметры как:
		??Поддержать проект|Описание: Если вы нажали на эту кнопку, то на некоторых товарах вам будет показанна реклама. С вашей помощью мы сможем сделать проект ещё лучше.
		
		Редактировать Адрес, данные карты, ФИО
		
		Оставить отзыв о сервисе|Описание: Вы можете напрямую написать администратору проекта и рассказать о своих впечатлениях и посоветовать как можно улучшить проект. (Честность и хорошие идеи всегда приветствуются)
		
		Смена пароля|Описание: Вы меняли пароль ДАТА, частые смены пароля способствуют укреплению защиты вашего аккаунта от злоумышленников и иногда от вас самих, не забудьте позаботиться о запасном способе восcтановления аккаунта.
		
		2FA|Описание: добавить профиль Telegram для подтверждения входа в аккаунт. Или данные вашего паспорта для последующего востановления аккаунта через него.
		
		Для разработчиков|Описание: Если вы уже прожжёный пользователь, которого не пугают мысли о том, чтобы написать свой собственный проект на основе нашего продвинутого API, то вы всегда можете получить свой API Key нажав сюда. У вас откроется Dispute с Администратором, которому вы расскажете немножко о себе и о своих планах на наш API, а он взамен откроет вам доступ к детальной метрике товаров. Если ваша идея нас заинтересует, то мы готовы её купить.

		Выйти с аккаунта|Описание: Перед выходом с аккаунта не забудьте проверить помните ли вы пароль и/или есть ли у вас иные способы вернуть аккаунт в случае утраты логина/пароля

		??Удалить профиль|Описание: Вы точно уверены в этом? Вся информация о вас будет безвозвратно удалена без возможности востановления даже владельцем <<Название сервиса>>. 
```

## Подсистемы:
#### - Login + Registration System
##### -- Sign-In 
##### -- Fill Out blank (Passport,BankCard,TgID ...)

#### - Delivery callback System 
##### -- Delivery API
Example:

##### -- Delivery callback form
##### -- Delivery analysis information
##### -- Delivery send information about new order
##### -- DeliveryNeedForSpeed (Sending a request for transportation to delivery services)
##### -- Delivery Stocks System (Loaded goods/Unloaded goods) count,time ...
###### --- Получение товара используя code у пользователя в статусе заказа.
###### ??---- Создание QR кодов из string в file, filetype = .PNG
Example: 
	The deliverer fills out a form with the fields:
	Where is he located, how soon will he finish unloading the goods, if he is at the pick-up point (the data is subjective), which goods (their ID and number) he unloaded what else was inside. 
	In particular, the deliverer indicates when he will go to the next pick-up point and which one will be next, and most importantly: what circumstances, if any, detained him and for how long.

	The system analyzes from the already collected data the speed for which the deliverer overcame the distance from the last pick-up point to the current one without taking into account the costs of circumstances and calculates the idealized time of arrival of the deliverer to the next pick-up point, after which it compares the speed with the average speed of delivery of the service and, if the speed is higher than the average value, it leads it to the average, otherwise case : the parameters are not changed.

	After unloading the goods, the user evaluates its transportation quality together with the manager of the pick-up point, shows a QR code from his basket of orders received at the pick-up point.
#### - Выставление счёта на карту пользователя.
Example:
	After showing the order code, the user is already billed and can pick up the goods
	(NOT REAL FUNCTION, Сделаю иммитацию запроса к стороннему сервису с рандомной выдачей (Платёж прошёл успешно, недостаточно ср-в и неполадки в сети)).
	В 2-х последних случаях выставление счёта продолжается до получения положительного ответа (в случае отрицательного, а именно УЖЕ ОТКЛАНЁННОГО ДЕЙСТВИЯ с опр. кодом, создаётся новое.)

#### - Telegram-bot 2FA System
Example:
	On Form user send true login and password | He/She activate 2FA
	After that, the user receives a message in Telegram with the text:
	A user with this IP and with this User-Agent wants to log into your account.
	There will be callback buttons at the bottom: Forbidding entry and requiring you to change the password on your account after and a button allowing entry.
	To change the data of the card, passport, full name, 2FA confirmation is also required.
##### ?? -- Telegram-bot for send advert


#### - xls Document System (Create,Save to IO on Server in .ZIP with password (API Key Owner user),Del)

#### - Another developer API Form (for get SEO permissions) - (Никто не будет читать их сообщения, метрика товара, на мой взгляд должна быть доступна любому разработчику, это только прибавит активных пользователей со сторонних сервисов или ботов. Халявная реклама, поэтому они и SEO-менеджеры, а вот если их проект будет стоящим, то можно и выкупить.)
##### - Analysis of SEO-manager's actions (Count requests, address (IPv4,IPv6,MAC if can get and another information))
Example:
	Log Files: OK , Warning, Danger, ERROR
	for all types log
	Path: /venv/../logging/FileName.md
	Saved_Logs: sudo /venv/../logging/archive/DATETime_FileName.zip

#### - User Cart (Can Edit count (+1/-1),Visit product page, Del from cart)
##### -- User Delivery Cart (Open full order descryption, status, where is Delivery ...)

#### - Product's Edit System (Продавец сможет оставлять заявки на создание нового товара или редактирование уже имеющихся)

#### - Product's MemberAll System (Система просмотров комментариев пользователей, оценок в момент состояния продукта и на момент настоящего времени) постранично или по конкретному id.
##### *Example Product's MemberAll System*

	/product/{Owner ID/{productID}/comment/?page=1&count=3&distance=2 > (max-count: 20, max-distance: 10,max-page:9000 all values had Def=0 if add id then "data" will be ){
		"data": {
			"comments":[
				{
					"hasFiles": False,"comment_id":"2t%HFAfn09#0tY8","date":datetime.DATE("8.08.2023"),"id":0
				},
				{
					"hasFiles": False,"comment_id":"2t%HFCfn09#2tY8","date":datetime.DATE("21.09.2023"),"id":2
				},
				{
					"hasFiles": False,"comment_id":"2t%HFEfn09#4tY8","date":datetime.DATE("23.09.2023"),"id":4
 				}
			]
		},
		"count_on_page": 5,
		"destroyOn": datetime.DATE("23.09.2024")
	}

	/product/{Owner ID}/{productID}/comment/?id=2t%HFAfn09#4tY8 > {
		"ShortName":"XXXX X.X.",
		"text":"It's awesome! Nice ! Cool! AMAZING!",
		"UnixDate":12xxxxxxx3,
		"HisRate_Link":"/product/{Owner ID}/{productID}/rating/?id={userid}",
		"rate":10,
		"AttachedFiles": [
			"/upload/user{userid}/comm-{FileType}/{FileName}.{FileType}",
			"/upload/user{userid}/comm-{FileType}/{FileName}.{FileType}"
		]
	}

	"/product/{Owner ID}/{productID}/rating/?id={userid}" > {
		"hasComment": True,
		(if hasComment add len
			"ShortComment": Comment.get("text")[0:74],
		)
		"Comment_id": "2t%xxxxxxxx9#4tY8",
		"rate":10,
		"user_color": RandomHEX().generate(),
		"UnixDate":12xxxxx3,
		(if Cookies has "Berear: API" and API owned by a user with SEO privileges then add len 		"Prices":{
				"PriceOnMoment_with_sale":1xxx4,
				"PriceOnMoment": "1xxx5",
				"SaleOnMoment": 2x
			},
			"DisputeCoutOnMoment": 2,
			"IndexRating": 2xxx6,
			"SoldOnMoment": 9xxxx9,
			"RefundOnMoment": 0,
			"CountOnMoment": 2512x9,
			"message_from_serviceOwner": "Hello, Developer, Nice to meet you!",
		)
		"ShapeFactor": ("circle","triangle","quadrilateral","pentagon")[int(rate//3)+1],
		"OpenDisputeBefore": False
	}

## Требования к DataBase

?? 1. EXCEL - Для долгосрочного хранения информации обо всех измениниях продуктов внутри АИС.

1. MySQL (или если получится более граммотно дискретизировать данные и объединять их у пользователя при авторизации, то можно даже ***sqlite3***, вцелом она не так плоха для такого проекта, особенно если поверх написать специфический class для управления всем этим делом)
2. MongoDB – хранение данных о файлах, а конкретно: Расположение файлов на сервере (т.к. это скорее всего будут тяжёлые и качественные .png или того хуже .webp), 
FileType, 
FileSize_Mbite, 
PK NN Picture ID,
NN Owner ID Def=101 (ServiceOwner id),
UsedIn (UI,Comments,ProductPicture,UserProfile,Plug)

### DON'T README
```
Возможно я упустил мелкие детали описывая проект, но в ходе разработки это ТЗ будет дополняться деталями и полностью усеится FAQ описаниями. ТЗ останется в git проекта в двух экземплярах.
```
