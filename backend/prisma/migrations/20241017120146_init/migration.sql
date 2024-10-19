-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- CreateTable
CREATE TABLE "user" (
    "id" UUID NOT NULL DEFAULT public.uuid_generate_v4(),
    "email" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "workout" (
    "id" UUID NOT NULL DEFAULT public.uuid_generate_v4(),
    "date" TIMESTAMP(3) NOT NULL,
    "user_id" UUID NOT NULL,
    "comments" TEXT,
    "cardio" INTEGER NOT NULL,

    CONSTRAINT "workout_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "exercise_map" (
    "id" UUID NOT NULL DEFAULT public.uuid_generate_v4(),
    "title" TEXT NOT NULL,

    CONSTRAINT "exercise_map_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "exercise" (
    "id" UUID NOT NULL DEFAULT public.uuid_generate_v4(),
    "workout_id" UUID NOT NULL,
    "exercise_id" UUID NOT NULL,
    "comments" TEXT,

    CONSTRAINT "exercise_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "approach" (
    "exercise_id" UUID NOT NULL,
    "approach" INTEGER NOT NULL,
    "weight" INTEGER NOT NULL,
    "comments" TEXT,

    CONSTRAINT "approach_pkey" PRIMARY KEY ("exercise_id","approach")
);

-- AddForeignKey
ALTER TABLE "workout" ADD CONSTRAINT "workout_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "exercise" ADD CONSTRAINT "exercise_workout_id_fkey" FOREIGN KEY ("workout_id") REFERENCES "workout"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "exercise" ADD CONSTRAINT "exercise_exercise_id_fkey" FOREIGN KEY ("exercise_id") REFERENCES "exercise_map"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "approach" ADD CONSTRAINT "approach_exercise_id_fkey" FOREIGN KEY ("exercise_id") REFERENCES "exercise"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
