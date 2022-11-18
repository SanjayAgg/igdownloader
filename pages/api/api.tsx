// THIS FILE IS GENERATED WITH `npm run generate`
// import * as Scalar from '../scalars'
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  post?: Maybe<Download_Post>;
  stories?: Maybe<Download_Stories>;
};


export type MutationPostArgs = {
  url: Scalars['String'];
};


export type MutationStoriesArgs = {
  url: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  download?: Maybe<Download_Post>;
};


export type QueryDownloadArgs = {
  url: Scalars['String'];
};

export type Download_Post = {
  __typename?: 'download_post';
  hashtag?: Maybe<Array<Maybe<Scalars['String']>>>;
  img?: Maybe<Array<Maybe<Scalars['String']>>>;
  path?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
  text?: Maybe<Scalars['String']>;
  video?: Maybe<Scalars['String']>;
};

export type Download_Stories = {
  __typename?: 'download_stories';
  img?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
  video?: Maybe<Scalars['String']>;
};

export type PostMutationVariables = Exact<{
  url: Scalars['String'];
}>;


export type PostMutation = { __typename?: 'Mutation', post?: { __typename?: 'download_post', img?: Array<string | null> | null, text?: string | null, hashtag?: Array<string | null> | null, video?: string | null, success?: boolean | null } | null };


export const PostDocument = gql`
    mutation post($url: String!) {
  post(url: $url) {
    img
    text
    hashtag
    video
    success
  }
}
    `;
export type PostMutationFn = Apollo.MutationFunction<PostMutation, PostMutationVariables>;

/**
 * __usePostMutation__
 *
 * To run a mutation, you first call `usePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postMutation, { data, loading, error }] = usePostMutation({
 *   variables: {
 *      url: // value for 'url'
 *   },
 * });
 */
export function usePostMutation(baseOptions?: Apollo.MutationHookOptions<PostMutation, PostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PostMutation, PostMutationVariables>(PostDocument, options);
      }
export type PostMutationHookResult = ReturnType<typeof usePostMutation>;
export type PostMutationResult = Apollo.MutationResult<PostMutation>;
export type PostMutationOptions = Apollo.BaseMutationOptions<PostMutation, PostMutationVariables>;
export type MutationKeySpecifier = ('post' | 'stories' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	post?: FieldPolicy<any> | FieldReadFunction<any>,
	stories?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('download' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	download?: FieldPolicy<any> | FieldReadFunction<any>
};
export type download_postKeySpecifier = ('hashtag' | 'img' | 'path' | 'success' | 'text' | 'video' | download_postKeySpecifier)[];
export type download_postFieldPolicy = {
	hashtag?: FieldPolicy<any> | FieldReadFunction<any>,
	img?: FieldPolicy<any> | FieldReadFunction<any>,
	path?: FieldPolicy<any> | FieldReadFunction<any>,
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	text?: FieldPolicy<any> | FieldReadFunction<any>,
	video?: FieldPolicy<any> | FieldReadFunction<any>
};
export type download_storiesKeySpecifier = ('img' | 'success' | 'video' | download_storiesKeySpecifier)[];
export type download_storiesFieldPolicy = {
	img?: FieldPolicy<any> | FieldReadFunction<any>,
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	video?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier),
		fields?: MutationFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	},
	download_post?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | download_postKeySpecifier | (() => undefined | download_postKeySpecifier),
		fields?: download_postFieldPolicy,
	},
	download_stories?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | download_storiesKeySpecifier | (() => undefined | download_storiesKeySpecifier),
		fields?: download_storiesFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;