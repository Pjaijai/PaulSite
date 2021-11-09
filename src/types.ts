export type IProgress = number
export type IStartDate = string
export type IEndDate  = string

export interface IInfo{
    title: string
    start: IStartDate
    end : IEndDate
    org: string
    description: string
}

export interface IProject{
    title: string
    description: string
    tech: string[]
    demo:string,
    link:string,
}




export interface ISkills {
    skills?: string
    progress: IProgress
}

export interface ISection{
    title : string
}