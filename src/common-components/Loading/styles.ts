import styled from "styled-components";

export const LoadingContainer = styled.div`
  height: calc(100vh - 250px);
	display:flex;
	justify-content:center;
	align-items:center;
`

export const Spinner = styled.div`
	border: 16px solid var(--white); 
	border-top: 16px solid var(--primary); 
	border-right: 16px solid var(--primary);
	border-radius: 50%;
	width: 60px;
	height: 60px;
	animation: spin 2s linear infinite;

	@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
	}
`