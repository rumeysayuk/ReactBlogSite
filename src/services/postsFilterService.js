import {Subject} from "rxjs"

const subject = new Subject()
//gözlemci

export const postsFilterService = {
    sendFilterData: (filterKey) => subject.next({key: filterKey}),
    clearFilterKey: () => subject.next(),
    getFilterKey: () => subject.asObservable()
}
