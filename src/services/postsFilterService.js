import {Subject} from "rxjs"

const subject = new Subject()
// observerlara veri yayıyor(multicast). //observable
//observerlar birbirinden bağımsız onları subject dinliyor.

export const postsFilterService = {
    sendFilterData: (filterKey) => subject.next({key: filterKey}),
    clearFilterKey: () => subject.next(),
    getFilterKey: () => subject.asObservable()
}
