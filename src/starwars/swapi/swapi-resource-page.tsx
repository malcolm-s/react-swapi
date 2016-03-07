// import * as React from "react";
// import {SwapiListResponse} from "./swapi-list-response";
// import {UrlPager} from "../url-pager";
//
// declare function fetch(url: string): any;
//
// interface SwapiResourcePageState<T> {
//   loading: boolean;
//   lastResponse?: SwapiListResponse<T>;
// }
//
// interface SwapiResourcePageProps {
//   name: string;
// }
//
// export class SwapiResourcePage<T> extends React.Component<SwapiResourcePageProps, SwapiResourcePageState<T>> {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       loading: true
//     };
//   }
//
//   componentWillMount() {
//     this.fetchResults(`http://swapi.co/api/${this.props.name}`);
//   }
//
//   fetchResults(url) {
//     if (!url) {
//       return;
//     }
//
//     this.setState({ loading: true });
//
//     return fetch(url)
//       .then(res => res.json())
//       .then((res: SwapiListResponse<T>) => {
//         console.log(res)
//         this.setState({
//           loading: false,
//           lastResponse: res
//         });
//       });
//   }
//
//   render() {
//     if (this.state.loading) {
//       return (
//         <div>
//           <h2>{this.props.name}</h2>
//           <div>Loading...</div>
//         </div>
//       );
//     } else {
//       return (
//         <div>
//           <h2>{this.props.name}</h2>
//           <UrlPager
//             onPreviousClick={() => this.fetchResults(this.state.lastResponse.previous)}
//             onNextClick={() => this.fetchResults(this.state.lastResponse.next)} />
//           {this.renderResults()}
//         </div>
//       );
//     }
//   }
//
//   renderResults() {
//     if (!this.state.lastResponse) {
//         return;
//     }
//
//     return (
//       <div>
//         {this.state.lastResponse.results.map(result =>
//           (
//             <div>
//               <h3>{result["name"]}</h3>
//               <ul>
//                 {Object.keys(result).map(prop => <li>{prop}: {result[prop]}</li>)}
//               </ul>
//             </div>
//           )
//         )}
//       </div>
//     );
//   }
// }
