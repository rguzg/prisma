import { Context } from '../../utils';

export default {
    movieTheaters: (parent, args, ctx: Context) => ctx.prisma.movieTheaters(),
    movieTheater: (parent, args, ctx: Context) => ctx.prisma.movieTheater(args.where)
}