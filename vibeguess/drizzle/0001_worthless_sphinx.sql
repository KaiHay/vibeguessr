CREATE TABLE "my-chatbot_player" (
	"id" varchar(255) PRIMARY KEY NOT NULL,
	"points" varchar(256)
);
--> statement-breakpoint
ALTER TABLE "my-chatbot_player" ADD CONSTRAINT "my-chatbot_player_id_my-chatbot_user_id_fk" FOREIGN KEY ("id") REFERENCES "public"."my-chatbot_user"("id") ON DELETE no action ON UPDATE no action;