import { Context } from "../../utils";

export default {
  createShowing: (parent, args, ctx: Context) => ctx.prisma.createShowing(args.data),
  updateShowing: (parent, args, ctx: Context) => ctx.prisma.updateShowing(args),
};
