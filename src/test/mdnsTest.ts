import makeMdns, { MulticastDNS } from 'multicast-dns';

const mdns = makeMdns();
function run() {
	mdns.query({
		questions: [
			{
				name: 'ihost',
				type: 'PTR',
			},
		],
	})
	mdns.on('response', (response) => {
		const { answers } = response;
		console.log("🚀 ~ file: mdnsTest.ts:15 ~ mdns.on ~ answers", answers)
	})
}
run()