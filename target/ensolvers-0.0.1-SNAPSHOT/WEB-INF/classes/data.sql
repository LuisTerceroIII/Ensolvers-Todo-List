insert into "user"("name","username","password","email") values ('Luis Espinoza','luisterceroiii','1234','luis.espinoza.nav@live.com');
insert into "user"("name","username","password","email") values ('Luis Espinoza 2','luisterceroiii_2','1234_2','luis.espinoza.nav_2@live.com');

insert into "folder_tasks"("id_user","name") values (1,'Free Time');
insert into "folder_tasks"("id_user","name") values (1,'College');
insert into "folder_tasks"("id_user","name") values (1,'Work');

insert into "folder_tasks"("id_user","name") values (2,'Free Time');
insert into "folder_tasks"("id_user","name") values (2,'College');
insert into "folder_tasks"("id_user","name") values (2,'Work');

insert into "task"("id_user","id_folder","description","completed") values (1,1,'Drink my juice',false);
insert into "task"("id_user","id_folder","description","completed") values (1,1, 'Look at the sun',false);
insert into "task"("id_user","id_folder","description","completed") values (1,2,'See Dijkstra algorithm class',false);
insert into "task"("id_user","id_folder","description","completed") values (1,3,'Planning meeting',false);

insert into "task"("id_user","id_folder","description","completed") values (2,4,'Read an article',true);
insert into "task"("id_user","id_folder","description","completed") values (2,5, 'Take logic classes',false);
insert into "task"("id_user","id_folder","description","completed") values (2,4,'Work out',true);
insert into "task"("id_user","id_folder","description","completed") values (2,6,'Add unit test to Union-find',true);

