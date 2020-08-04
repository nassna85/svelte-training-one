<script context="module">
    export let currentPage;
    export let itemsPerPage;
    export let length;
    export let onPageChanged;

    const pagesCount = Math.ceil(length / itemsPerPage);
    const pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    export const getData = (items, currentPage, itemsPerPage) => {
        console.log("getDataaaaa");
        const start = currentPage * itemsPerPage - itemsPerPage;
        return items.slice(start, start + itemsPerPage);
    }

</script>

<style>

</style>

<div>
    <ul class="pagination pagination-sm">
        <li class={"page-item" + (currentPage === 1 && " disabled")}>
            <button
                    class="page-link"
                    onClick={() => onPageChanged(currentPage - 1)}
            >
                &laquo;
            </button>
        </li>
        {#each pages as page}
            <li key={page}
                class={"page-item" + (currentPage === page && " active")}
            >
                <button class="page-link" onClick={() => onPageChanged(page)}>
                    {page}
                </button>
            </li>
        {/each}
        <li
                class={"page-item" + (currentPage === pagesCount && " disabled")}
        >
            <button
                    class="page-link"
                    onClick={() => onPageChanged(currentPage + 1)}
            >
                &raquo;
            </button>
        </li>
    </ul>
</div>