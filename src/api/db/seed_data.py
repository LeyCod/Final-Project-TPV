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
            "cif": "B12345566"
        },
        {
            "id": 9003,
            "name": "Jose's Fake Corp.",
            "cif": "B12345666",
            "logo_url": "https://res.cloudinary.com/dxbcvuacb/image/upload/v1647108989/LogoDesign4_zrx29z.png",
            "description": "Comida tradicional casera: tapas y raciones, menú del día, menú especial, etc..."
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
        },
        {
            "id": 8006,
            "company_id": 9003,
            "is_admin": True,
            "nif": "53700058A",
            "first_name": "Jose Clemente",
            "last_name":"Gacía Rodríguez",
            "email": "jgarciar@fakemail.com",
            "password": "666",
            "phone": "612345667",
            "image_url": "https://res.cloudinary.com/dxbcvuacb/image/upload/v1647109076/me_uxx12h.jpg"
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
            "company_id": 9002
        }
    ], 
    "MenuItem":[
        {
            "id": 6003,
            "name": "Cerveza",
            "description": "Jarra de cerveza",
            "price": 2.50,
            "image_url": "https://res.cloudinary.com/dxbcvuacb/image/upload/v1647620179/www.cocinayvino.com-cervezas-e1626313339477-1200x900_q8is4f.jpg",
            "company_id": 9003
        },
        {
            "id": 6004,
            "name": "Tabla de quesos y jamón",
            "description": "Jamón ibérico, quesos, frutos secos y pan",
            "price": 8.50,
            "image_url": "https://res.cloudinary.com/dxbcvuacb/image/upload/v1647619037/tabla-de-quesos-y-jamon_rmrazf.jpg",
            "company_id": 9003
        },
        {
            "id": 6005,
            "name": "Hummus",
            "description": "Crema de garbanzos con patatas",
            "price": 2.10,
            "image_url": "https://res.cloudinary.com/dxbcvuacb/image/upload/v1647619037/taberna-el-sur-de-huertas_jkkpxl.jpg",
            "company_id": 9003
        },
        {
            "id": 6006,
            "name": "Huevos rotos",
            "description": "Con jamón o chorizo y patatas",
            "price": 7.50,
            "image_url": "https://res.cloudinary.com/dxbcvuacb/image/upload/v1647619037/taberna-el-sur-de-huertas_1_w48mub.jpg",
            "company_id": 9003
        },
        {
            "id": 6007,
            "name": "Gambas al ajillo",
            "description": "Con gambas, ajo y seguro que algo más",
            "price": 7.30,
            "image_url": "https://res.cloudinary.com/dxbcvuacb/image/upload/v1647619037/taberna-el-sur-de-huertas_3_qhrvm0.jpg",
            "company_id": 9003
        },
        {
            "id": 6008,
            "name": "Salmorejo",
            "description": "Plato típico cordobés",
            "price": 6.20,
            "image_url": "https://res.cloudinary.com/dxbcvuacb/image/upload/v1647619037/taberna-el-sur-de-huertas_2_ziudws.jpg",
            "company_id": 9003
        },
        {
            "id": 6009,
            "name": "Gambas al pil pil",
            "description": "Plato tradicional español con ajo, aceite de oliva y guindilla",
            "price": 7.80,
            "image_url": "https://res.cloudinary.com/dxbcvuacb/image/upload/v1647619037/20181008-182036-largejpg_c2xumg.jpg",
            "company_id": 9003
        },
        {
            "id": 6010,
            "name": "Croquetas caseras",
            "description": "Diferentes recetas tradicionales",
            "price": 8,
            "image_url": "https://res.cloudinary.com/dxbcvuacb/image/upload/v1647619493/taberna-el-sur-de-huertas_4_rpbryc.jpg",
            "company_id": 9003
        },
        {
            "id": 6011,
            "name": "Tarta de queso",
            "description": "Con queso y cosas",
            "price": 4.20,
            "image_url": "https://res.cloudinary.com/dxbcvuacb/image/upload/v1647619467/humus_uch2xr.jpg",
            "company_id": 9003
        },
        {
            "id": 6012,
            "name": "Sangría",
            "description": "Bebida refrescante con frutas de temporada",
            "price": 3.50,
            "image_url": "https://res.cloudinary.com/dxbcvuacb/image/upload/v1647619037/photo0jpg_jjerf5.jpg",
            "company_id": 9003
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
            "company_id": 9003,
            "table_id": 7000,
            "payment_method_id": 2
        },
        {
            "id": 5001,
            "ticket_url": "ticketURL",
            "total_price": 12.50,
            "is_active": True,
            "company_id": 9003,
            "table_id": 7001,
            "payment_method_id": 2
        },
        {
            "id": 5002,
            "ticket_url": "ticketURL",
            "total_price": 12.50,
            "is_active": True,
            "company_id": 9003,
            "table_id": 7002,
            "payment_method_id": 2
        }
    ],
    "OrderItem":[
        {
            "id": 4001,
            "quantity": 1,
            "item_id": 6003,
            "order_id": 5000
        }, 
        {
            "id": 4002,
            "quantity": 1,
            "item_id": 6004,
            "order_id": 5001
        },
        {
            "id": 4003,
            "quantity": 1,
            "item_id": 6005,
            "order_id": 5002
        }
    ] 
}
