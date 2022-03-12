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
            "is_admin": 1,
            "nif": "65748390A",
            "name": "Varg Vikernes",
            "email": "mytest@email.com",
            "password": "123456"
        },
        {
            "id": 8002,
            "company_id": 9000,
            "is_admin": 0,
            "nif": "89548378B",
            "name": "Johny Employee of the Month",
            "email": "johny@monthly.com",
            "password": "John10"
        },
        {
            "id": 8003,
            "company_id": 9001,
            "is_admin": 0,
            "nif": "89762717H",
            "name": "George Van duck",
            "email": "geor@gino.com",
            "password": "George66"
        },
        {
            "id": 8004,
            "company_id": 9001,
            "is_admin": 1,
            "nif": "95847367V",
            "name": "Jane Doe",
            "email": "doe@dot.com",
            "password": "4923746"
        },
        {
            "id": 8005,
            "company_id": 9002,
            "is_admin": 1,
            "nif": "54987651K",
            "name": "Abigail Blake",
            "email": "blake@abg.com",
            "password": "654321"
        }, 
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
    ]
}