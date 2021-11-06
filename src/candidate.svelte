<script>
    import xlsx from "xlsx";

    let inputFile;
    const convertFileToxlsx = (file) =>
        new Promise((resovle) => {
            const reader = new FileReader();
            reader.onload = function () {
                const fileData = reader.result;
                const wb = xlsx.read(fileData, { type: "binary" });
                wb.SheetNames.forEach(function (sheetName) {
                    const rowObj = xlsx.utils.sheet_to_json(
                        wb.Sheets[sheetName]
                    );
                    resovle(rowObj);
                });
            };
            reader.readAsBinaryString(file);
        });
    const onChange = async (event) => {
        const file = event.target.files[0];
        const peoples = file && (await convertFileToxlsx(file));
        console.log(peoples)
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
