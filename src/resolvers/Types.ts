import { Context } from '../utils'

export const types = {
    MovieTheater: {
        showings: (parent, args, ctx: Context) => ctx.prisma.movieTheater({id: parent.id}).showings(),
        screens: (parent, args, ctx: Context) => ctx.prisma.movieTheater({id: parent.id}).screens(),
        employees: (parent, args, ctx: Context) => ctx.prisma.movieTheater({id: parent.id}).employees(),
    },
    Showing: {
        movie: (parent, args, ctx: Context) => ctx.prisma.showing({id: parent.id}).movie(),
        screen: (parent, args, ctx: Context)=> ctx.prisma.showing({id: parent.id}).screen(),
        seats: (parent, args, ctx: Context)=> ctx.prisma.showing({id: parent.id}).seats()
    },
    Employee: {
        user: (parent, args, ctx: Context) => ctx.prisma.employee({id: parent.id}).user()
    },
    Movie: {
        genres: (parent, args, ctx: Context) => ctx.prisma.movie({id: parent.id}).genres()
    },
    Screen: {
        currentlyShowing: (parent, args, ctx: Context) => ctx.prisma.screen({id: parent.id}).currentlyShowing(),
        currentSeats: (parent, args, ctx: Context) => ctx.prisma.screen({id: parent.id}).currentSeats()
    }
}
