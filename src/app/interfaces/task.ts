export interface Task {
    id?: string;
    name: string;
    description?: string;
    customer: string;
    times?: Time[]
}

export interface Time {

    id: string;
    description: string;
    begin_date: string;
    end_date: string;
    spent_time: number;
}