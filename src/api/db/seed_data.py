data = {
    "Company":[
        {
            "id": 9000,
            "name": "Fake BD Company SL",
            "cif": "K2345678A"
        },
        {
            "id": 9001,
            "name": "Seed Business SA",
            "cif": "X1234567A"
        },
        {
            "id": 9002,
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
            "email": "mytest1@email.com",
            "password": "123456",
            "phone": "123456789",
            "image_url": ""
        },
                {
            "id": 8003,
            "company_id": 9001,
            "is_admin": True,
            "nif": "23456789A",
            "first_name": "Varg",
            "last_name":"Vikernes",
            "email": "mytest2@email.com",
            "password": "123456",
            "phone": "123456789",
            "image_url": ""
        },
                {
            "id": 8004,
            "company_id": 9001,
            "is_admin": False,
            "nif": "34567891A",
            "first_name": "Varg",
            "last_name":"Vikernes",
            "email": "mytest3@email.com",
            "password": "123456",
            "phone": "123456789",
            "image_url": ""
        },
        {
            "id": 8005,
            "company_id": 9002,
            "is_admin": True,
            "nif": "01234567A",
            "first_name": "Varg",
            "last_name":"Vikernes",
            "email": "mytest4@email.com",
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
            "company_id": 9000
        }, 
                {
            "id": 7001,
            "name": "Barra 1",
            "outside": False,
            "capacity": 1,
            "qr_url": "urlqr",
            "occupied": False,
            "is_active": False,
            "company_id": 9000
        }, 
                {
            "id": 7002,
            "name": "Mesa 1",
            "outside": False,
            "capacity": 3,
            "qr_url": "urlqr",
            "occupied": False,
            "is_active": False,
            "company_id": 9000
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
            "company_id": 9000
        }, 
        {
            "id": 6001,
            "name": "pabellon",
            "description": "alubias negras, arroz, platano macho, carne mechada",
            "price": 12.0,
            "image_url": "",
            "is_active": True,
            "company_id": 9000
        },
        {
            "id": 6002,
            "name": "pizza margarita",
            "description": "pizza sencilla",
            "price": 4.30,
            "image_url": "",
            "is_active": True,
            "company_id": 9000
        }
    ],
        "OrderStatus":[
        {
            "id": 1,
            "name": "Pendiente"
        },
        {
            "id": 2,
            "name": "En espera"
        },
        {
            "id": 3,
            "name": "Pagado"
        },
        {
            "id": 4,
            "name": "Eliminado"
        }
    ],
    "PaymentMethod":[
        {
            "id": 1,
            "name": "Efectivo"
        },
        {
            "id": 2,
            "name": "Tarjeta"
        },
        {
            "id": 3,
            "name": "Bizum"
        },
        {
            "id": 4,
            "name": "Paypal"
        }
    ],
    "Order":[
        {
            "id": 5000,
            "ticket_url": "ticketURL",
            "total_price": 12.50,
            "is_active": True,
            "table_id": 7000,
            "payment_method_id": 2,
            "company_id": 9000
        },
        {
            "id": 5001,
            "ticket_url": "ticketURL",
            "total_price": 12.50,
            "is_active": True,
            "table_id": 7001,
            "payment_method_id": 2,
            "company_id": 9000
        },
        {
            "id": 5002,
            "ticket_url": "ticketURL",
            "total_price": 12.50,
            "is_active": True,
            "table_id": 7002,
            "payment_method_id": 2,
            "company_id": 9000
        }
    ],
    "OrderItem":[
        {
            "id": 4001,
            "quantity": 1,
            "item_id": 6000,
            "order_id": 5000
        }, 
        {
            "id": 4002,
            "quantity": 1,
            "item_id": 6001,
            "order_id": 5001
        },
        {
            "id": 4003,
            "quantity": 1,
            "item_id": 6002,
            "order_id": 5002
        }
    ] 
}