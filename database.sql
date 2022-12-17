CREATE TABLE "toDoList" (
    "id" SERIAL PRIMARY KEY,
    "task" VARCHAR(500) NOT NULL,
    "notes" VARCHAR(500),
    "status" VARCHAR(500)
);

INSERT INTO "toDoList"
("task", "notes", "status")
VALUES
('Dishes', 'I believe in you', 'Not done'),
('Sweep', 'Get under the shoe rack', 'Not done'),
('Finish Homework', 'You can do this', 'Not done'),
('Make dinner', 'Find a recipe', 'Not done')



