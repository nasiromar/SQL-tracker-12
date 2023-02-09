USE employee_db;   

INSERT INTO department (name)
VALUES ('Legal'),
        ('HR'),
        ('Engineering');

INSERT INTO roles (title, salary, department_id)
VALUES ('Lawyer', 150000, 1),
        ('Clerk', 65000, 2),
        ('Engineering', 85000, 3);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("adam", "fuller", 1, NULL),
        ("bruce", "smith", 2, NULL),
        ("james", "wayne", 3, 1),
        ("tom", "kelly", 3, NULL),
        ("austin", "cooper", 2, NULL),
        ("amy", "fuller", 1, 2),
        ("jasmine", "river", 2, 3),
        ("cleo", "dunn", 1, 4);
    


