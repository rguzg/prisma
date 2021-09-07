import { Context } from "../../utils";

export default {
  createEmployee: (parent, args, ctx: Context) => ctx.prisma.createEmployee(args.data),
  updateEmployee: (parent, args, ctx: Context) => ctx.prisma.updateEmployee(args),
  // updateManyEmployees: (parent, args, ctx: Context) => ctx.prisma.updateManyEmployees(args),
  // upsertEmployee: (parent, args, ctx: Context) => ctx.prisma.upsertEmployee(args),
};
