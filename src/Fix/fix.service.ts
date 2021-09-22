import { InjectQueue, Process, Processor } from "@nestjs/bull";
import { Injectable } from "@nestjs/common";
import { Job, Queue } from "bull";

@Injectable()
@Processor('fixing')
export class FixService {

    constructor(
        @InjectQueue('book') private bookQueue: Queue,
        @InjectQueue('fixing') private reparationQueue: Queue
    ) { }

    /// Simulation d'une réparation de livre
    @Process('fromHomeToReparation')
    FixBook(job: Job<any>) {
        // console.log("fixBook");
        setTimeout(() => {
            let reparedBook = job.data.book;
            reparedBook.state = "fixed"
            this.bookQueue.add('fromReparationToLibrary', {book: reparedBook})
        }, 5000);
    }
}