<script>
    import xlsx from "xlsx";

    let inputFile;
    const onChange = (event) => {
        const { target } = event.target.ç;
        var reader = new FileReader();
        reader.onload = function () {
            var fileData = reader.result;
            var wb = xlsx.read(fileData, { type: "binary" });
            wb.SheetNames.forEach(function (sheetName) {
                var rowObj = xlsx.utils.sheet_to_json(wb.Sheets[sheetName]);
                console.log(JSON.stringify(rowObj));
            });
        };
        reader.readAsBinaryString(target.files[0]);
    };
</script>

<div class="candidate__wrap">
    <div
        on:click={() => {
            inputFile.click();
        }}
    >
        file upload
    </div>
    <input type="file" bind:this={inputFile} hidden on:change={onChange} />
</div>

<style>
    .candidate__wrap {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 100vh;
        position: absolute;
        left: 0;
        top: 0;
    }
</style>
