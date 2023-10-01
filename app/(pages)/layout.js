import { Suspense } from "react";

import PageHeader from "../components/PageHeader";
import Loading from "./loading";

export default function Layout({ children }) {
	return (
		<div className="min-h-screen w-full bg-[url('/imageBackgroundBlurred.svg')] absolute z-[-2] bg-cover bg-fixed bg-center bg-no-repeat bg-gray-400 bg-blend-overlay dark:bg-gray-700 dark:bg-blend-overlay">
			<PageHeader />
			<Suspense fallback={<Loading />}>{children}</Suspense>
		</div>
	);
}