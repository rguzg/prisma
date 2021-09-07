import { Context } from "../../utils";

export default {
  createMovieTheater: (parent, args, ctx: Context) => ctx.prisma.createMovieTheater(args.data),
  updateMovieTheater: (parent, args, ctx: Context) => ctx.prisma.updateMovieTheater(args),
};
