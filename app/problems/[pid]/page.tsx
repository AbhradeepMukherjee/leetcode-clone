import Workspace from '@/components/Workspace/Workspace';
import React from 'react';
import { problems } from '@/utils/problems';
import { Problem } from '@/utils/types/problem';


const ProblemPage = async ({ params }: { params: { pid: string } }) => {
	const {problem} = await getProblems({params});
	console.log(problem?.id);

    return <div>
        <Workspace />
    </div>;
}
export default ProblemPage;

// export async function generateStaticParams() {
// 	const paths = Object.keys(problems).map((key) => ({
// 		params: { pid: key },
// 	}));

// 	return {
// 		paths,
// 		fallback: false,
// 	};
// }

async function getProblems({ params }: { params: { pid: string } }) {
	const { pid } = params;
	const problem = problems[pid];

	if (!problem) {
		return {
			notFound: true,
		};
	}
	problem.handlerFunction = problem.handlerFunction.toString();
	return {
			problem,
	};
}
