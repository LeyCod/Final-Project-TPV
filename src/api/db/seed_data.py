data = {
    "Company":[
        {
            "id": 9001,
            "name": "Fake BD Company SL",
            "cif": "K2345678A"
        },
        {
            "id": 9002,
            "name": "Seed Business SA",
            "cif": "X1234567A"
        },
        {
            "id": 9003,
            "name": "Reactive Frontend Corp.",
            "cif": "B12345666"
        }
    ],
    "User":[
        {
            "id": 8001,
            "company_id": 9000,
            "is_admin": True,
            "nif": "12345678A",
            "first_name": "Varg",
            "last_name":"Vikernes",
            "email": "mytest@email.com",
            "password": "123456",
            "phone": "123456789",
            "image_url": ""
        },
                {
            "id": 8002,
            "company_id": 9000,
            "is_admin": False,
            "nif": "65748390A",
            "first_name": "Joe",
            "last_name":"Vikernes",
            "email": "mytest2@email.com",
            "password": "123456",
            "phone": "123456789",
            "image_url": ""
        },
                {
            "id": 8003,
            "company_id": 9001,
            "is_admin": True,
            "nif": "12345678A",
            "first_name": "Varg",
            "last_name":"Vikernes",
            "email": "mytest@email.com",
            "password": "123456",
            "phone": "123456789",
            "image_url": ""
        },
                {
            "id": 8004,
            "company_id": 9001,
            "is_admin": False,
            "nif": "65748390A",
            "first_name": "Varg",
            "last_name":"Vikernes",
            "email": "mytest@email.com",
            "password": "123456",
            "phone": "123456789",
            "image_url": ""
        },
                {
            "id": 8005,
            "company_id": 9003,
            "is_admin": True,
            "nif": "65748390A",
            "first_name": "Varg",
            "last_name":"Vikernes",
            "email": "mytest@email.com",
            "password": "123456",
            "phone": "123456789",
            "image_url": ""
        }
    ],
    "Table":[
        {
            "id": 7000,
            "name": "Mesa 1",
            "outside": False,
            "capacity": 4,
            "qr_url": "urlqr",
            "occupied": False,
            "is_active": False,
            "company_id": 9001
        }, 
                {
            "id": 7001,
            "name": "Barra 1",
            "outside": False,
            "capacity": 1,
            "qr_url": "urlqr",
            "occupied": False,
            "is_active": False,
            "company_id": 9001
        }, 
                {
            "id": 7002,
            "name": "Mesa 1",
            "outside": False,
            "capacity": 3,
            "qr_url": "urlqr",
            "occupied": False,
            "is_active": False,
            "company_id": 9001
        }
    ], 
    "MenuItem":[
        {
            "id": 6000,
            "name": "tortilla",
            "description": "huevo y patatas",
            "price": 3.0,
            "image_url": "",
            "is_active": True,
            "company_id": 9001
        }, 
        {
            "id": 6001,
            "name": "pabellon",
            "description": "alubias negras, arroz, platano macho, carne mechada",
            "price": 12.0,
            "image_url": "",
            "is_active": True,
            "company_id": 9002
        },
        {
            "id": 6002,
            "name": "pizza margarita",
            "description": "pizza sencilla",
            "price": 4.30,
            "image_url": "",
            "is_active": True,
            "company_id": 9003
        }
    ],
    "Order":[
        {
            "id": 5000,
            "ticket_url": "ticketURL",
            "total_price": 12.50,
            "is_active": True,
            "user_id": 8001,
            "table_id": 7000,
            "status_id": self.order_status_id,
            "payment_method_id": self.payment_method_id
        },
        {
            "id": 5000,
            "ticket_url": "ticketURL",
            "total_price": 12.50,
            "is_active": True,
            "user_id": 8003,
            "table_id": 7001,
            "status_id": self.order_status_id,
            "payment_method_id": self.payment_method_id
        },
        {
            "id": 5000,
            "ticket_url": "ticketURL",
            "total_price": 12.50,
            "is_active": True,
            "user_id": 8005,
            "table_id": 7002,
            "status_id": self.order_status_id,
            "payment_method_id": self.payment_method_id
        }
    ],
    "OrderItem":[
        {
            "id": 4001,
            "quantity": 1,
            "item_id": 6001,
            "order_id": 1
        }, 
        {
            "id": 4002,
            "quantity": 1,
            "item_id": 6002,
            "order_id": 1
        },
        {
            "id": 4003,
            "quantity": 1,
            "item_id": 6003,
            "order_id": 1
        }
    ]
}