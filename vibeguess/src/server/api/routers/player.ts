import { z } from "zod";
import { eq } from "drizzle-orm"
import {
    createTRPCRouter,
    protectedProcedure,
    publicProcedure,
} from "~/server/api/trpc";
import { players } from "~/server/db/schema";

export const playerRouter = createTRPCRouter({
    addPoints: publicProcedure
        .input(z.object({ Id: z.string(), addPoint: z.string() }))
        .mutation(async ({ input, ctx }) => {
            const oldPoints = await ctx.db.query.players.findFirst({
                where: ((player, { eq }) => eq(player.id, input.Id))
            })
            console.log('add points: ', input.addPoint)
            const newPoints = (Number(oldPoints ? (oldPoints.points ? oldPoints.points : '0') : '0') + Number(input.addPoint)).toString()
            console.log('Updating to this: ', newPoints);

            await ctx.db.update(players)
                .set({ points: newPoints })
                .where(eq(players.id, input.Id))
        }),
    create: publicProcedure
        .input(z.object({ id: z.string() }))
        .mutation(async ({ ctx, input }) => {
            await ctx.db.insert(players).values({
                id: input.id,
                points: '0',
            }).onConflictDoNothing()
        }),
});
