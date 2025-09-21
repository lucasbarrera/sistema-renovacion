-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Personal" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "lastName" TEXT,
    "dni" TEXT,
    "address" TEXT,
    "phone" TEXT,
    "shiftId" INTEGER,
    "roleId" INTEGER,
    "teamId" INTEGER,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Personal_shiftId_fkey" FOREIGN KEY ("shiftId") REFERENCES "Shift" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Personal_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Personal_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Personal" ("address", "createdAt", "dni", "email", "id", "lastName", "name", "phone", "roleId", "shiftId", "teamId", "updatedAt") SELECT "address", "createdAt", "dni", "email", "id", "lastName", "name", "phone", "roleId", "shiftId", "teamId", "updatedAt" FROM "Personal";
DROP TABLE "Personal";
ALTER TABLE "new_Personal" RENAME TO "Personal";
CREATE UNIQUE INDEX "Personal_email_key" ON "Personal"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
