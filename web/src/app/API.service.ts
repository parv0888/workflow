/* tslint:disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import * as Observable from "zen-observable";

export type CreateJobInput = {
  id?: string | null;
  title: string;
  duration: number;
  status: number;
  jobOwnerId?: string | null;
  personJobsId?: string | null;
};

export type UpdateJobInput = {
  id: string;
  title?: string | null;
  duration?: number | null;
  status?: number | null;
  personJobsId?: string | null;
};

export type DeleteJobInput = {
  id?: string | null;
};

export type CreatePersonInput = {
  id?: string | null;
  name: string;
  pushToken: string;
  username: string;
};

export type UpdatePersonInput = {
  id: string;
  name?: string | null;
  pushToken?: string | null;
  username?: string | null;
};

export type DeletePersonInput = {
  id?: string | null;
};

export type ModelJobFilterInput = {
  id?: ModelIDFilterInput | null;
  title?: ModelStringFilterInput | null;
  duration?: ModelIntFilterInput | null;
  status?: ModelIntFilterInput | null;
  and?: Array<ModelJobFilterInput | null> | null;
  or?: Array<ModelJobFilterInput | null> | null;
  not?: ModelJobFilterInput | null;
};

export type ModelIDFilterInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type ModelStringFilterInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type ModelIntFilterInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  contains?: number | null;
  notContains?: number | null;
  between?: Array<number | null> | null;
};

export type ModelPersonFilterInput = {
  id?: ModelIDFilterInput | null;
  name?: ModelStringFilterInput | null;
  pushToken?: ModelStringFilterInput | null;
  username?: ModelStringFilterInput | null;
  and?: Array<ModelPersonFilterInput | null> | null;
  or?: Array<ModelPersonFilterInput | null> | null;
  not?: ModelPersonFilterInput | null;
};

export type CreateJobMutation = {
  __typename: "Job";
  id: string;
  title: string;
  duration: number;
  status: number;
  owner: {
    __typename: "Person";
    id: string;
    name: string;
    pushToken: string;
    jobs: {
      __typename: "ModelJobConnection";
      nextToken: string | null;
    } | null;
    username: string;
  } | null;
};

export type UpdateJobMutation = {
  __typename: "Job";
  id: string;
  title: string;
  duration: number;
  status: number;
  owner: {
    __typename: "Person";
    id: string;
    name: string;
    pushToken: string;
    jobs: {
      __typename: "ModelJobConnection";
      nextToken: string | null;
    } | null;
    username: string;
  } | null;
};

export type DeleteJobMutation = {
  __typename: "Job";
  id: string;
  title: string;
  duration: number;
  status: number;
  owner: {
    __typename: "Person";
    id: string;
    name: string;
    pushToken: string;
    jobs: {
      __typename: "ModelJobConnection";
      nextToken: string | null;
    } | null;
    username: string;
  } | null;
};

export type CreatePersonMutation = {
  __typename: "Person";
  id: string;
  name: string;
  pushToken: string;
  jobs: {
    __typename: "ModelJobConnection";
    items: Array<{
      __typename: "Job";
      id: string;
      title: string;
      duration: number;
      status: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  username: string;
};

export type UpdatePersonMutation = {
  __typename: "Person";
  id: string;
  name: string;
  pushToken: string;
  jobs: {
    __typename: "ModelJobConnection";
    items: Array<{
      __typename: "Job";
      id: string;
      title: string;
      duration: number;
      status: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  username: string;
};

export type DeletePersonMutation = {
  __typename: "Person";
  id: string;
  name: string;
  pushToken: string;
  jobs: {
    __typename: "ModelJobConnection";
    items: Array<{
      __typename: "Job";
      id: string;
      title: string;
      duration: number;
      status: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  username: string;
};

export type GetJobQuery = {
  __typename: "Job";
  id: string;
  title: string;
  duration: number;
  status: number;
  owner: {
    __typename: "Person";
    id: string;
    name: string;
    pushToken: string;
    jobs: {
      __typename: "ModelJobConnection";
      nextToken: string | null;
    } | null;
    username: string;
  } | null;
};

export type ListJobsQuery = {
  __typename: "ModelJobConnection";
  items: Array<{
    __typename: "Job";
    id: string;
    title: string;
    duration: number;
    status: number;
    owner: {
      __typename: "Person";
      id: string;
      name: string;
      pushToken: string;
      username: string;
    } | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetPersonQuery = {
  __typename: "Person";
  id: string;
  name: string;
  pushToken: string;
  jobs: {
    __typename: "ModelJobConnection";
    items: Array<{
      __typename: "Job";
      id: string;
      title: string;
      duration: number;
      status: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  username: string;
};

export type ListPersonsQuery = {
  __typename: "ModelPersonConnection";
  items: Array<{
    __typename: "Person";
    id: string;
    name: string;
    pushToken: string;
    jobs: {
      __typename: "ModelJobConnection";
      nextToken: string | null;
    } | null;
    username: string;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateJobSubscription = {
  __typename: "Job";
  id: string;
  title: string;
  duration: number;
  status: number;
  owner: {
    __typename: "Person";
    id: string;
    name: string;
    pushToken: string;
    jobs: {
      __typename: "ModelJobConnection";
      nextToken: string | null;
    } | null;
    username: string;
  } | null;
};

export type OnUpdateJobSubscription = {
  __typename: "Job";
  id: string;
  title: string;
  duration: number;
  status: number;
  owner: {
    __typename: "Person";
    id: string;
    name: string;
    pushToken: string;
    jobs: {
      __typename: "ModelJobConnection";
      nextToken: string | null;
    } | null;
    username: string;
  } | null;
};

export type OnDeleteJobSubscription = {
  __typename: "Job";
  id: string;
  title: string;
  duration: number;
  status: number;
  owner: {
    __typename: "Person";
    id: string;
    name: string;
    pushToken: string;
    jobs: {
      __typename: "ModelJobConnection";
      nextToken: string | null;
    } | null;
    username: string;
  } | null;
};

export type OnCreatePersonSubscription = {
  __typename: "Person";
  id: string;
  name: string;
  pushToken: string;
  jobs: {
    __typename: "ModelJobConnection";
    items: Array<{
      __typename: "Job";
      id: string;
      title: string;
      duration: number;
      status: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  username: string;
};

export type OnUpdatePersonSubscription = {
  __typename: "Person";
  id: string;
  name: string;
  pushToken: string;
  jobs: {
    __typename: "ModelJobConnection";
    items: Array<{
      __typename: "Job";
      id: string;
      title: string;
      duration: number;
      status: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  username: string;
};

export type OnDeletePersonSubscription = {
  __typename: "Person";
  id: string;
  name: string;
  pushToken: string;
  jobs: {
    __typename: "ModelJobConnection";
    items: Array<{
      __typename: "Job";
      id: string;
      title: string;
      duration: number;
      status: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  username: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateJob(input: CreateJobInput): Promise<CreateJobMutation> {
    const statement = `mutation CreateJob($input: CreateJobInput!) {
        createJob(input: $input) {
          __typename
          id
          title
          duration
          status
          owner {
            __typename
            id
            name
            pushToken
            jobs {
              __typename
              nextToken
            }
            username
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateJobMutation>response.data.createJob;
  }
  async UpdateJob(input: UpdateJobInput): Promise<UpdateJobMutation> {
    const statement = `mutation UpdateJob($input: UpdateJobInput!) {
        updateJob(input: $input) {
          __typename
          id
          title
          duration
          status
          owner {
            __typename
            id
            name
            pushToken
            jobs {
              __typename
              nextToken
            }
            username
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateJobMutation>response.data.updateJob;
  }
  async DeleteJob(input: DeleteJobInput): Promise<DeleteJobMutation> {
    const statement = `mutation DeleteJob($input: DeleteJobInput!) {
        deleteJob(input: $input) {
          __typename
          id
          title
          duration
          status
          owner {
            __typename
            id
            name
            pushToken
            jobs {
              __typename
              nextToken
            }
            username
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteJobMutation>response.data.deleteJob;
  }
  async CreatePerson(input: CreatePersonInput): Promise<CreatePersonMutation> {
    const statement = `mutation CreatePerson($input: CreatePersonInput!) {
        createPerson(input: $input) {
          __typename
          id
          name
          pushToken
          jobs {
            __typename
            items {
              __typename
              id
              title
              duration
              status
            }
            nextToken
          }
          username
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreatePersonMutation>response.data.createPerson;
  }
  async UpdatePerson(input: UpdatePersonInput): Promise<UpdatePersonMutation> {
    const statement = `mutation UpdatePerson($input: UpdatePersonInput!) {
        updatePerson(input: $input) {
          __typename
          id
          name
          pushToken
          jobs {
            __typename
            items {
              __typename
              id
              title
              duration
              status
            }
            nextToken
          }
          username
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdatePersonMutation>response.data.updatePerson;
  }
  async DeletePerson(input: DeletePersonInput): Promise<DeletePersonMutation> {
    const statement = `mutation DeletePerson($input: DeletePersonInput!) {
        deletePerson(input: $input) {
          __typename
          id
          name
          pushToken
          jobs {
            __typename
            items {
              __typename
              id
              title
              duration
              status
            }
            nextToken
          }
          username
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeletePersonMutation>response.data.deletePerson;
  }
  async GetJob(id: string): Promise<GetJobQuery> {
    const statement = `query GetJob($id: ID!) {
        getJob(id: $id) {
          __typename
          id
          title
          duration
          status
          owner {
            __typename
            id
            name
            pushToken
            jobs {
              __typename
              nextToken
            }
            username
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetJobQuery>response.data.getJob;
  }
  async ListJobs(
    filter?: ModelJobFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListJobsQuery> {
    const statement = `query ListJobs($filter: ModelJobFilterInput, $limit: Int, $nextToken: String) {
        listJobs(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            title
            duration
            status
            owner {
              __typename
              id
              name
              pushToken
              username
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListJobsQuery>response.data.listJobs;
  }
  async GetPerson(id: string): Promise<GetPersonQuery> {
    const statement = `query GetPerson($id: ID!) {
        getPerson(id: $id) {
          __typename
          id
          name
          pushToken
          jobs {
            __typename
            items {
              __typename
              id
              title
              duration
              status
            }
            nextToken
          }
          username
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetPersonQuery>response.data.getPerson;
  }
  async ListPersons(
    filter?: ModelPersonFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListPersonsQuery> {
    const statement = `query ListPersons($filter: ModelPersonFilterInput, $limit: Int, $nextToken: String) {
        listPersons(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            pushToken
            jobs {
              __typename
              nextToken
            }
            username
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListPersonsQuery>response.data.listPersons;
  }
  OnCreateJobListener: Observable<OnCreateJobSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateJob {
        onCreateJob {
          __typename
          id
          title
          duration
          status
          owner {
            __typename
            id
            name
            pushToken
            jobs {
              __typename
              nextToken
            }
            username
          }
        }
      }`
    )
  ) as Observable<OnCreateJobSubscription>;

  OnUpdateJobListener: Observable<OnUpdateJobSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateJob {
        onUpdateJob {
          __typename
          id
          title
          duration
          status
          owner {
            __typename
            id
            name
            pushToken
            jobs {
              __typename
              nextToken
            }
            username
          }
        }
      }`
    )
  ) as Observable<OnUpdateJobSubscription>;

  OnDeleteJobListener: Observable<OnDeleteJobSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteJob {
        onDeleteJob {
          __typename
          id
          title
          duration
          status
          owner {
            __typename
            id
            name
            pushToken
            jobs {
              __typename
              nextToken
            }
            username
          }
        }
      }`
    )
  ) as Observable<OnDeleteJobSubscription>;

  OnCreatePersonListener: Observable<OnCreatePersonSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreatePerson {
        onCreatePerson {
          __typename
          id
          name
          pushToken
          jobs {
            __typename
            items {
              __typename
              id
              title
              duration
              status
            }
            nextToken
          }
          username
        }
      }`
    )
  ) as Observable<OnCreatePersonSubscription>;

  OnUpdatePersonListener: Observable<OnUpdatePersonSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdatePerson {
        onUpdatePerson {
          __typename
          id
          name
          pushToken
          jobs {
            __typename
            items {
              __typename
              id
              title
              duration
              status
            }
            nextToken
          }
          username
        }
      }`
    )
  ) as Observable<OnUpdatePersonSubscription>;

  OnDeletePersonListener: Observable<OnDeletePersonSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeletePerson {
        onDeletePerson {
          __typename
          id
          name
          pushToken
          jobs {
            __typename
            items {
              __typename
              id
              title
              duration
              status
            }
            nextToken
          }
          username
        }
      }`
    )
  ) as Observable<OnDeletePersonSubscription>;
}
