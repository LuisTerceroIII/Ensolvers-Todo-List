CREATE TABLE "user" (
    "id_user" SERIAL NOT NULL PRIMARY KEY,
    "name" varchar (30),
    "username" varchar (30),
    "password" varchar (30),
    "email" varchar (30)
);

CREATE TABLE "folder_tasks" (
    "id_folder_tasks" SERIAL PRIMARY KEY,
    "id_user" SERIAL NOT NULL,
    "name" varchar,
    FOREIGN KEY (id_user) REFERENCES "user"("id_user")
);

CREATE TABLE "task" (
    "id_task" SERIAL NOT NULL PRIMARY KEY,
    "id_user" SERIAL NOT NULL,
    "id_folder" SERIAL NOT NULL,
    "description" varchar,
    "completed" boolean,
    FOREIGN KEY (id_user) REFERENCES "user"("id_user"),
    FOREIGN KEY (id_folder) REFERENCES "folder_tasks"("id_folder_tasks")
);

