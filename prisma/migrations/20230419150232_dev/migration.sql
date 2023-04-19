-- CreateTable
CREATE TABLE "profile" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "Name" TEXT,
    "Email" TEXT,

    CONSTRAINT "profile_pkey" PRIMARY KEY ("id")
);
