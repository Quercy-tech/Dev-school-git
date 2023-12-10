class PaginationHelper {
    constructor(collection, itemsPerPage) {
        this.collection = collection;
        this.itemsPerPage = itemsPerPage;
    }

    pageCount() {
        return Math.ceil(this.collection.length / this.itemsPerPage);
    }

    itemCount() {
        return this.collection.length;
    }

    pageItemCount(pageIndex) {
        if (pageIndex < 0 || pageIndex >= this.pageCount()) {
            return -1; // Invalid page index
        }

        if (pageIndex === this.pageCount() - 1) {
            return this.collection.length % this.itemsPerPage || this.itemsPerPage;
        }

        return this.itemsPerPage;
    }

    pageIndex(itemIndex) {
        if (itemIndex < 0 || itemIndex >= this.itemCount()) {
            return -1; // Invalid item index
        }

        return Math.floor(itemIndex / this.itemsPerPage);
    }
}