const pm = new Promise((resolve, reject) => {
    resolve(123456);
})

async function print () {
    // const result = await pm;
    console.log(await pm);
}

print();