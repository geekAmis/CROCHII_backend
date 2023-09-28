
Архитектура проекта будет изменена к версии 0.7.1 (alpha test)
До тех пор в main будут валяться файлы так как мне удобно, что ускорит время
и качество разработки проекта.

По поводу планов на следующие версии:
```
V0.0.1 main
- Разработка README.md и тз.md для документирования всех нюансов и функций проекта.

V0.0.2 main
- Добавление всех основных зависимостей в проект и окончание написания ТЗ.md 
- Добавление git в проект и разработка архитектуры проекта, которую будет удобна для 
БЫСТРОЙ разработки с кучей багов и малыми тестами (как-бы смешно это не звучало, но речь
идёт о CORE части проекта).
- Создание venv в проект.

V0.0.3 main
- Добавление html файла Untitled Diagram.drawio.html и подробное описание проекта на
схеме.
- Добавление .gitignore и устранение рудиментов проекта (frontend), он будет перенесён 
в branch fronTest, если останется время на детальные тесты.
- Добавление app.py поднимающего текущие сервисы в проекте

V0.0.4 Test
- Тестирование готовой части проекта на баги и перепись "плохого" кода.
- Добавление Docker ,но пока-что на будующее дак этак до версии 0.9.11
- Разработка сервиса Sign-In и cookies analizer для доступа к персональным правам групп.
- Внесение в проект run.sh для запуска проекта "В первый раз?"
- Внесение в проект файла с зависимостями и устранение этой папки venv наконец-то.
- Тестирование получившегося участка проекта и залив в версию 0.1.0

V0.1.0 main
- Разработка базы данных в том виде, в котором она представленна на граф. схеме проекта
- Разработка развёртывания базы данных при запуске проекта (внесение этого в run.sh)

v0.1.1 Test
- Тестирование базы данных (MySQL) и (mysqlite3) на выявление более оптимальной БД в проект
(Не стоит забывать, что это лишь demo версия проекта, а итоговую я в открытый доступ 
не отдам.)

V0.1.1 main
- Доработка версии v0.0.1 Test и внесение в main.
- Возможность добавление товаров:
-- Разработка формы отправки товара на модерацию
-- Возможность модераторам просматривать списки скрытых товаров (товаров на модерации)
-- Возможность модераторам добавлять товар из базы TEMP-Товаров (товаров на модерации)
в базу постоянных товаров (видимых пользователями сайта)

V0.1.1.1 Test
- Разработка возможности пользователям получать информацию о категориях товаров
- Разработка возможности пользователям получать информацию о товарах в категории
- Разработка возможности пользователям добавлять товар в корзину

Так, пока на этом всё ,надо ещё сессию пережить, потом уже поактивнее разработка пойдёт.
```

# Сервис CRoChII

(Маленький аналог WB)
## Цели сервиса:
```
	- Продажа товара пользователям
	- Размещение товаров на площадке
	- Доставка товара до пункта выдачи и отслеживание доставщиков в процессе работы
	- Принятие и обработка метрики (анонимной) пользователей для развития SEO
	- Поиск интересующего товара в интересующей категории (по или без фильтров)
	- Сбор данных пользователей о действиях на сайте для более таргетированной выдачи товаров
	- Создание системы модерации размещённого продавцами на проверку товара
	- Создание маркетплейса с отсутствием некоторых недостатков конкурентов на рынке.
	- Создание индекса цена-качество у каждой категории товаров.
	- Препятствовать искусственности скидок на товары (Когда цена товара завышается, 
		но увеличивается в пропорциональном отношении скидка на него.)
```

## Цели по моей текущей специальности (Информационная безопасность автоматизированных систем):
```
	- Выявление, предотвращение и защита от актуальных угроз безопасности или минимизирование таковых.
	- Проведение аудита безопасности сервиса для создание сводки нормативов защиты подобных систем.
	- Разработка универсального алгоритма логирования и сопоставления входящих в/исходящих из сервера данных с шаблоннами выдачи 
```



## Иерархические права доступа Автоматизированной Системы (АС)
```
	- Разработчик (Стронний разработчик, который может получить подробную документацию по методам и функциям)

	- Доставка (Доставщик, группа подразделяется на подгруппы со своими правами)
		-- Доставка-start (Занимается перевозкой)
		-- Доставка-stat (Занимается статистикой и менеджментом)
		-- Доставка-Владелец (HR и Доставка-stat)

	- Продавец (Привелигированный человек [не внутр. сотрудник сервиса], 
		имеющий разрешение на публикацию, изменение, удаление своих продуктов в специально выделенной, скрытой категории, 
		которую проверяют модераторы товаров)

	- Модератор (Модератор проекта, группа подразделяется на подгруппы со своими правами)
		-- Модератор товаров (Занимается рассмотрением новых товаров в специально выделенной ,скрытой категории "На модерации" [Одобрить/На доработку])
		-- Модератор споров (Занимается арбитражём между покупателем и продавцом в специальном чате сервиса. [Выносит вердикт])
		-- Модератор точки (Занимается выдачей товара по соответствующему коду товара [Как в QR, так и символьном виде], 
			отправкой запроса на списание ср-в и учётом товара на складе точки)
	
	- Администратор (HR-менеджер, который может добавлять пользователям права нижестоящих в иерархии групп. 
		В спектр задач входит мониторинг действий сотрудников)

	- Владелец (Имеет как физ. доступ к серверу, так и полные права на все действия внутри сервиса)


	Дополнительная:
		- Тестировщик (Имеет физ. доступ к тестируемой версии сервиса [Не имеет доступа к релизной версии])
```


## Требования к функционалу
```

	------------------ОБЩЕЕ--------------
		- Возможность войти в аккаунт
		- Возможность создать аккаунт без привелегий
		- Возможность смотреть информацию о своём аккаунте (в профиле)
		- Возможность просматривать список активных категорий с товарами
		- Возможность фильтровать выдачу в категории товаров по ценовому диапазону, 
		наличию отзывов, минимальному рейтингу, индексу цена-качество, названию товаров
		- Возможность добавление понравившегося товара в корзину
		- Возможность просмотра комментариев и оценок пользователей купивших товар
		- Возможность смотреть на историю споров с продавцом (количество и вердикт)
		- Возможность писать в поддержку по тех. вопросам (Лично владельцу) через бота (использую TelegramAPI)
		- Возможность получать ответ от поддержки в чате сервиса 
	-------------------------------------
	--------После входа в аккаунт-------- (Без привелегий)
		- Возможность получать таргетированные предложения о товарах
		- Возможность создавать споры с продавцом через чат сервиса
		- Возможность заполнить данные карты
		- Возможность оформить покупку товара
		- Возможность оплатить товар (до или после получения)
		- Возможность редактировать/добавлять отзывы о товарах
		- Возможность оценивать по 10-и бальной шкале качество доставки и качество товара
		- Возможность настройки отображения фамилии (скрытая/публичная) в комментариях
		- Возможность заполнить конфиденциальную информацию 
		- Возможность удалить всю конфиденциальную информацию о себе (Согласно Федеральному закону № 152-ФЗ)
		- Возможность отслеживать статус оформленного товара
		- Возможность отслеживать текущий адрес доставщика с оформленным товаром
		- Возможность подачи заявки на офиц. разрешение использования API в сторонних проектах
		- Возможность менять пароль на аккаунте
	-------------------------------------
	--------Аккаунт разработчика---------
		- Наследует права пользователя после входа в аккаунт (без привелегий)
		- Официальное разрешение на внедрение API в сторонних проектах и в своих целях
		- Возможность получить свой постоянный API-Key
		- Возможность сменить свой API-key
		- Возможность удаления своих прав разработчика с аккаунта (переход в пользователя без привелегий) 
	-------------------------------------
	--------Аккакнт модератора----------- 
		Все подкатегории модераторов наследуют возможности разработчика (кроме удаления своих прав)

		- Модератор товаров в праве получить полный список товаров в категории "На модерации".
		- Модератор товаров в праве публиковать в указанную продавцом категорию товара.
		- Модератор товаров в праве менять статус товара в категории "На модерации" на: (
			Отказ в публикации,
			Отправлен на доработку
		)
		- Модератор товаров в праве и обязан в случае отправки на доработку указать, что конкретно нужно доработать.
		- Модератор товаров в праве перенести товар из любой категории в категорию "На модерации"
		- Модератор товаров в праве отправить группе Администраторов запрос на снятие прав продавца (через чат сервиса)

		- Модератор споров в праве получить полный список споров покупателя с продавцом.
		- Модератор споров имеет возможность отфильтровать выдачу споров по дате их создания
		- Модератор споров в праве выносить окончательный вердикт спору из списка:(
			"Спор разрешён миром",
			"Вернуть стоимость товара покупателю",
			"Вернуть товар продавцу",
			"Вернуть стоимость товара покупателю и товар продавцу.",
			"Покупатель не прав"
		)
		- Модератор споров в праве получать весь список сообщений пользователя с продавцом
		- Модератор споров в праве забрать возможность пользователя к покупке товаров на сервисе
		- Модератор споров в праве вернуть возможность пользователя к покупке товаров на сервисе

		- Модератор точки выдачи в праве запрашивать конфиденциальные данные пользователя (Адрес доставки, ФИО, серию паспорта, номер телефона)
		- Модератор точки выдачи в праве создавать запрос к оплате товара по коду покупателя
		- Модератор точки выдачи в праве менять статус товара в доставке на (
			"Ожидает в пункте выдачи {Адрес пункта выдачи} до {текущая дата + 5 дней}",
			"Оформляется в пункт выдачи {Адрес пункта выдачи}",
			"Оплачен",
			"Ворованный",
			"Потерян",
			"Возврат"
		)
		- Модератор точки выдачи в праве просматривать списки товаров прибывающих на точку.
	-------------------------------------
	-------Аккаунт администратора--------
	Наследует возможности модератора товаров и модератора споров

		- Возможность выдачи/снятия привелегии "Разрабтчик"
		- Возможность создания аккаунта с привелегиями ниже своей по иерархии (найм сотрудника)
		- Возможность просматривать все действия нанятых сотрудников (ответ API на запросы модераторов и запрос модераторов к API)
		- Возможность фильтровать действия нанятых сотрудников по ФИО сотрудника, дате запроса, методу обращения к API.
		- Возможность удалять аккаунты пользователей (с привелегиями ниже своей по иерархии)
		- Возможность просматривать запросы к поддержке
		- Возможность отвечать на запросы к поддержке (с указанием,что это ответ администратора №{ID администратора})
		- Возможность наследовать созданные аккаунты нанятых сотрудников от других Администраторов по обоюдному согласию
		- Возможность создание и скачивание .xls таблички всех действий нанятых сотрудников
	-------------------------------------
	---------Аккаунт Доставки------------
		- Доставка-start имеет возможность принимать запроса на  транспортировку товара
		- Доставка-start имеет возможность менять пароль аккаунта
		- Доставка-start имеет возможность просматривать свою историю выполненных транспортировок
		- Доставка-start имеет возможность просматривать отзывы о доставке от пользователей (не на странице товара, а отдельно)
		- Доставка-start в праве и обязана заполнить форму со всеми товарами в распоряжении на каждой точке выдачи
		- Доставка-start в праве и обязана отправлять форму с текущим местоположением доставщика на каждой точке выдачи
		- Доставка-start имеет возможность смотреть рассчётное (приблизительное) время прибытия к следующей точке выдачи

		- Доставка-stat имеет возможность просматривать историю обращений к API всех доставщиков-start 
		- Доставка-stat имеет возможность формировать и скачивать .xls таблицу со ствтистикой доставщиков-start(
			Время на доставку из точки {} в точку {},
			Общее время доставки с первой и до последней точки в маршруте,
			Статус доставленных товаров на момент формирования таблицы,
			Расположение доставщика-start согласно форме на момент формирования таблицы,
			Количество товаров в списке на транспортировку
			Количество выполненных заказов доставщика-start
			Общий рейтинг доставщика относительно отзывов о доставке покупателей
		)
		- Доставка-stat имеет возможность создавать/удалять аккаунты доставщиков-start
		- Доставка-stat имеет возможность отправить конкретному доставщику-start запроса на принятие доставки

		- Доставка-Владелец наследует возможности привелегии Доставка-stat
		- Доставка-Владелец имеет возможность создавать/удалять аккаунты доставщиков-stat 
	-------------------------------------
	----------Аккаунт продавца-----------
		- Возможность размещения товаров в категории "На модерации"
		- Возможность редактирования товаров (через указание id редактируемых товаров)
		- Возможность редактирования количества товаров на складе 
		- Возможность просматривать страницы своих товаров
		- Возможность отвечать на комментарии покупателя
		- Возможность запрашивать у модератора удаления комментария (указание причины обязательно)
		- Возможность формировать .xls табличку со статистикой товара
		- Возможности пользователя оформившего его товар (относительно просмотра местоположения, статуса товара)
		- Возможность менять пароль аккаунта
		- Возможность получения уведомлений об оформленном товаре пользователем | через Telegram
		- Возможность получения уведомлений об открытии спора пользователем | через Telegram
		- Возможность получения уведомлений об открытых спорах с ним
		- Возможность просмотра сообщений открытых с ним споров
		- Возможность отвечать на сообщения в открытых с ним спорах
	-------------------------------------


	Владец добавляет/удаляет/редактирует аккаунты любых привелегий (заполняя их данные профиля) и наследует все возможности/права не связанные с удалением своего аккаунта от других привелегий.
```





## Требования к БД

0. XLS/XLSX - Не совсем база данных, но в этом формате будут формироваться таблички с данными из других БД

1. MySQL - Хранение всей текстовой информации
2. MongoDB – Хранение файлов




## Подсистемы

Регистрация / Вход


Главная страница с самыми популярными товарами
	
	Категорий товаров (Доступно на главной, если больше 1-ой, т.к. 1-на из них системная, которая "На модерации")

	Поиск товаров в выбранной категории и фильрам (По количеству, от ЧИСЛО до ЧИСЛО, максимальная разница между числами: 250)

	"Новинки" (отображается и на главной страничке, если есть)

	"Недавние скидки" (отображается и на главной страничке, если есть)

	Таргетированная выдача товаров для пользователя (отображается, если есть и если пользователь вошёл в аккаунт)


Страница товара

	Информация о товаре

	Рейтинг товара (общий)

	Количество возвратов товара (если были)

	Рейтинг цена-качество (если товару больше месяца)

	Рейтинг доставки (общий)

	Количество товара на складе продавца (если значение 0, то товар скрывается из категории, до изменения значения)

	Панель оформления заказа (покупки товара)

	Списки каждой оценки по определённому значению оценки (если это значение оценки есть)

	Список комментариев у оценок (если у оценок есть комментарии)

	Отправка от оформившего товар пользователя комментария и рейтинга (если оформил)

Панель оформления заказа

	Информация о товаре (Если кол-во на складе не 0, иначе ошибка: "Нет товара на складе")

	Стоимость (Если не 0)

	Ожидание ввода конфид. данных пользователя (если нет)

	Ввод номера, даты и cvv юанк карты (если нет)

	Выбор пункта выдачи в указанном городе (если не выбран, если выбран, то значение указанно)

	Отправка доставщикам запроса на транспортировку (если все данные верны)

Профиль пользователя

	Корзина пользователя (Если не пустая)

	Чаты (споры и запросы к тех.под.)

	Настройки (аккаунта пользователя)

	Выйти из аккаунта


Корзина пользователя

	Аналитика потраченных денежных средств в каждой категории товаров (если траты в данной категории были)

	Оформленный товар и информация о нём (Если есть)

	Список желаемых товаров и настройка их количества (Если есть)



Настройка аккаунта

	Постоянный API-Key (Если есть)

	Список внесённых данных пользователем
	
	Внесение/изменение данных (конфиденц., данных карты и т.д.)

	Опции настройки

	Состояния true/false у опций настройки


Чаты (от,к кому, тема,кратк. описание,раздел [Спор, запрос к тех.под. и т.д.])

	Список пользователей с которыми есть сообщения 

	Список сообщений адресованных пользователю или отправленных по адресату от пользователя (Если есть)

Панель администратора
	
	Списки сотрудников (если есть)
	
	Создание/Удаление сотрудников (аккаунтов)

	Информация о действиях сотрудников 



Панель модератора споров
	
	Поиск по фильтрам спора

	Списки споров по фильтрам

	Изменения или добавления "Вердикта" спору

Панель модератора точки выдачи
	
	Фильтр по id товара в категории или id товара на точке выдачи или по данным оформившего их пользователя

	Списки товаров ожидаемых по адресу 

	Изменение статуса товара

	Создание/просмотр_ответа заявки на оплату товара


Панель модератора товаров
	
	Фильтр списка товаров на модерации по категориям и/или дате создания

	Списки товаров в категории "На модерации"

	Изменения статуса товаров на модерации

	Информация о действиях продавца 


Информация о действиях "{Привелегия}"
	В зависимости от привелегии обратившегося (см. в ТЗ "Требования к функционалу")

	Фильтры для поиска действий или субъекта выполнившего действие

	Формирование .xls/.xlsx таблицы со всеми действиями запрашиваемой привелегии

	Список действий  запрашиваемой привелегии


Панель добавления аккаунта нового

	Уровень привелегии

	Конфид. информация

Панель добавления привелегий аккаунту

	ID аккаунта и логин

	Конфид информ. (Если есть, если нет - заполнение)

	Уровень привелегий






# Необязательно к прочтению (DON'T README.md): 


## Требования к БД, комментарий
Очень хочу PostgreSQL за место MySQL,но у меня только в планах её изучение.


## Техническая сторона вопроса формы хранения в БД
```
Пояснение к параметрам баз данных:
	PK в xls = PRIMARY KEY
	NN в xls = NOT NULL
	Def в xls = Default


Метрика пользователей:
|NN ID (integer)|PK Login (string)| Address (string)
|NN View Time (DATE)|NN Product ID (string)|NN Price (float)
|NN Category ID (integer)|NN Product Owner user ID (integer)
| CreateDeliveryOrder (bool) | Delivery link (string)|

Статистика товаров:
|PK Product ID (integer)|NN Category ID (integer)|NN Name (string)
|(PK) NN Main Picture address (FILE or string:path)|NN Owner user ID (integer)|NN PriceNow (float)
|Sale % (integer)|NN Price History (dict [{"unixDate":INT,"price":INTEGER,"sale_percent"INTEGER,"priceWithSale": FLOAT}])
| Descryption (Varchar(5559))|Count (INTEGER)
| DeliveryInfo (dict: [
	{
		"PK_Delivery ID":String,"countIn":INTEGER,"sold_onload":INTEGER,"NN_DeliveryName":String,"AverageDeliveryTimeDays":INTEGER
	}
]) OR (dict: [
	{
		"PK_DELIVERY ID": "Samovivoz","countIn":INTEGER,"sold_onload":INTEGER,"NN_DELIVERYNAME":"Самовывоз"
	}
])
| Views (BigInteger)|NN PK CommentsDict id (Varchar(300))|NN PK RatingDict id (Varchar(300)) 
| PK NN MorePicturesList id (Varchar(100))|Sold (Integer)|NN CreateDate Unix (INTEGER)
| NN CanPostAdvert (bool) | AverageDeliveryTimeDays (INTEGER) | LooseDispute (INTEGER) 
|Def=0 CanView (bool)|PK NN SpecificateHash alias SHLink (varchar(777))|

Информация о пользователях:
|PK NN User ID (integer)|NN FirstName|NN LastName|NN SurName
|NN FullName (f"{LastName} {FirstName} {SurName}")
|NN ShortName (f"{LastName} {FirstName[0]}.{SurName[0]}. ")|PK NN LoginHash (md5(Varchar(50)))
|NN Password Hash (md5(Varchar(70)))|Solds Count (INTEGER)|AllMoneySend (VARCHAR(20))
|NN Address (STRING)|card_number (varchar(12))|card_date (date)|card_cvv (varchar(2))
|PK card (int(card_number)+unixDate(card_date)*int(card_cvv))
| ViewThisDict dict([
	{
		"PK_product_data":dict,"unix_time_view":INTEGER,"Comment id": INTEGER,"USER_SEND_RATE": rangeint(0..10)
	}
])
|WinDispute Count (Integer)|DisputeIds_list (list:integer)
| WaitDelivery_WaitUser dict([
	{
		"product_data":dict,"PK_Delivery ID":Integer,"Address":String,"SecretCode": STRING,"status":inrange["Оформляется","Погружается","Выезжает к вам","В пути","Разружается на местном складе","Ожидает вас в пункте выдачи","Куплен","Возврат","В споре","Изъят на таможне","Ожидает вас на складе (Самовывоз)"]
	}
])
| UsedPromo_list (list:string)| ActivePromocode (dict({
	"promocode ID":INTEGER,"usedTime":UNIXDATE
	}))
|if TelegramID (INTEGER) > PK else > Def=-1|PK NN API (String(md5(LoginHash+UserID+Salt(randomInt(100,10000)))[0:70]+LoginHash[randomInt(0,3)]+CartID))
|NN Def=False (bool)|Passport seria_num (STRING:FLOAT) Def="-1000.100000"|PK NN Cart ID (varchar(170))|


```


## Некоторый пример формата выдачи
```

Описание:
	Система для просмотра пользлвательских комментариев, оценок, фото полученного товара: 
	1. постранично  
	2. по определенному идентификатору.


Пример приведён через GET запрос (для наглядности), но в проекте будут POST запросы к API.

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
			"Comment_id": "2t%xxxxxxxx9#4tY8",
		)
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

```
