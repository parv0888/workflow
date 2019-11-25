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
  startTime?: string | null;
  jobOwnerId?: string | null;
  personJobsId?: string | null;
};

export type UpdateJobInput = {
  id: string;
  title?: string | null;
  duration?: number | null;
  status?: number | null;
  startTime?: string | null;
  jobOwnerId?: string | null;
  personJobsId?: string | null;
};

export type DeleteJobInput = {
  id?: string | null;
};

export type CreatePersonInput = {
  id?: string | null;
  pushToken: string;
  name: string;
  username: string;
  email: string;
};

export type UpdatePersonInput = {
  id: string;
  pushToken?: string | null;
  name?: string | null;
  username?: string | null;
  email?: string | null;
};

export type DeletePersonInput = {
  id?: string | null;
};

export type CreateShutDownInput = {
  id?: string | null;
  expectedTimeHrs: number;
  startTime?: string | null;
};

export type UpdateShutDownInput = {
  id: string;
  expectedTimeHrs?: number | null;
  startTime?: string | null;
};

export type DeleteShutDownInput = {
  id?: string | null;
};

export type ModelJobFilterInput = {
  id?: ModelIDFilterInput | null;
  title?: ModelStringFilterInput | null;
  duration?: ModelIntFilterInput | null;
  status?: ModelIntFilterInput | null;
  startTime?: ModelStringFilterInput | null;
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
  pushToken?: ModelStringFilterInput | null;
  name?: ModelStringFilterInput | null;
  username?: ModelStringFilterInput | null;
  email?: ModelStringFilterInput | null;
  and?: Array<ModelPersonFilterInput | null> | null;
  or?: Array<ModelPersonFilterInput | null> | null;
  not?: ModelPersonFilterInput | null;
};

export type ModelShutDownFilterInput = {
  id?: ModelIDFilterInput | null;
  expectedTimeHrs?: ModelIntFilterInput | null;
  startTime?: ModelStringFilterInput | null;
  and?: Array<ModelShutDownFilterInput | null> | null;
  or?: Array<ModelShutDownFilterInput | null> | null;
  not?: ModelShutDownFilterInput | null;
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
    pushToken: string;
    jobs: {
      __typename: "ModelJobConnection";
      nextToken: string | null;
    } | null;
    name: string;
    username: string;
    email: string;
  } | null;
  startTime: string | null;
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
    pushToken: string;
    jobs: {
      __typename: "ModelJobConnection";
      nextToken: string | null;
    } | null;
    name: string;
    username: string;
    email: string;
  } | null;
  startTime: string | null;
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
    pushToken: string;
    jobs: {
      __typename: "ModelJobConnection";
      nextToken: string | null;
    } | null;
    name: string;
    username: string;
    email: string;
  } | null;
  startTime: string | null;
};

export type CreatePersonMutation = {
  __typename: "Person";
  id: string;
  pushToken: string;
  jobs: {
    __typename: "ModelJobConnection";
    items: Array<{
      __typename: "Job";
      id: string;
      title: string;
      duration: number;
      status: number;
      startTime: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  name: string;
  username: string;
  email: string;
};

export type UpdatePersonMutation = {
  __typename: "Person";
  id: string;
  pushToken: string;
  jobs: {
    __typename: "ModelJobConnection";
    items: Array<{
      __typename: "Job";
      id: string;
      title: string;
      duration: number;
      status: number;
      startTime: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  name: string;
  username: string;
  email: string;
};

export type DeletePersonMutation = {
  __typename: "Person";
  id: string;
  pushToken: string;
  jobs: {
    __typename: "ModelJobConnection";
    items: Array<{
      __typename: "Job";
      id: string;
      title: string;
      duration: number;
      status: number;
      startTime: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  name: string;
  username: string;
  email: string;
};

export type CreateShutDownMutation = {
  __typename: "ShutDown";
  id: string;
  expectedTimeHrs: number;
  startTime: string | null;
};

export type UpdateShutDownMutation = {
  __typename: "ShutDown";
  id: string;
  expectedTimeHrs: number;
  startTime: string | null;
};

export type DeleteShutDownMutation = {
  __typename: "ShutDown";
  id: string;
  expectedTimeHrs: number;
  startTime: string | null;
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
    pushToken: string;
    jobs: {
      __typename: "ModelJobConnection";
      nextToken: string | null;
    } | null;
    name: string;
    username: string;
    email: string;
  } | null;
  startTime: string | null;
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
      pushToken: string;
      name: string;
      username: string;
      email: string;
    } | null;
    startTime: string | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetPersonQuery = {
  __typename: "Person";
  id: string;
  pushToken: string;
  jobs: {
    __typename: "ModelJobConnection";
    items: Array<{
      __typename: "Job";
      id: string;
      title: string;
      duration: number;
      status: number;
      startTime: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  name: string;
  username: string;
  email: string;
};

export type ListPersonsQuery = {
  __typename: "ModelPersonConnection";
  items: Array<{
    __typename: "Person";
    id: string;
    pushToken: string;
    jobs: {
      __typename: "ModelJobConnection";
      nextToken: string | null;
    } | null;
    name: string;
    username: string;
    email: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetShutDownQuery = {
  __typename: "ShutDown";
  id: string;
  expectedTimeHrs: number;
  startTime: string | null;
};

export type ListShutDownsQuery = {
  __typename: "ModelShutDownConnection";
  items: Array<{
    __typename: "ShutDown";
    id: string;
    expectedTimeHrs: number;
    startTime: string | null;
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
    pushToken: string;
    jobs: {
      __typename: "ModelJobConnection";
      nextToken: string | null;
    } | null;
    name: string;
    username: string;
    email: string;
  } | null;
  startTime: string | null;
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
    pushToken: string;
    jobs: {
      __typename: "ModelJobConnection";
      nextToken: string | null;
    } | null;
    name: string;
    username: string;
    email: string;
  } | null;
  startTime: string | null;
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
    pushToken: string;
    jobs: {
      __typename: "ModelJobConnection";
      nextToken: string | null;
    } | null;
    name: string;
    username: string;
    email: string;
  } | null;
  startTime: string | null;
};

export type OnCreatePersonSubscription = {
  __typename: "Person";
  id: string;
  pushToken: string;
  jobs: {
    __typename: "ModelJobConnection";
    items: Array<{
      __typename: "Job";
      id: string;
      title: string;
      duration: number;
      status: number;
      startTime: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  name: string;
  username: string;
  email: string;
};

export type OnUpdatePersonSubscription = {
  __typename: "Person";
  id: string;
  pushToken: string;
  jobs: {
    __typename: "ModelJobConnection";
    items: Array<{
      __typename: "Job";
      id: string;
      title: string;
      duration: number;
      status: number;
      startTime: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  name: string;
  username: string;
  email: string;
};

export type OnDeletePersonSubscription = {
  __typename: "Person";
  id: string;
  pushToken: string;
  jobs: {
    __typename: "ModelJobConnection";
    items: Array<{
      __typename: "Job";
      id: string;
      title: string;
      duration: number;
      status: number;
      startTime: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  name: string;
  username: string;
  email: string;
};

export type OnCreateShutDownSubscription = {
  __typename: "ShutDown";
  id: string;
  expectedTimeHrs: number;
  startTime: string | null;
};

export type OnUpdateShutDownSubscription = {
  __typename: "ShutDown";
  id: string;
  expectedTimeHrs: number;
  startTime: string | null;
};

export type OnDeleteShutDownSubscription = {
  __typename: "ShutDown";
  id: string;
  expectedTimeHrs: number;
  startTime: string | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async SendNotificationToken(token: string): Promise<string | null> {
    const statement = `mutation SendNotificationToken($token: String!) {
        SendNotificationToken(token: $token)
      }`;
    const gqlAPIServiceArguments: any = {
      token
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <string | null>response.data;
  }
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
            pushToken
            jobs {
              __typename
              nextToken
            }
            name
            username
            email
          }
          startTime
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
            pushToken
            jobs {
              __typename
              nextToken
            }
            name
            username
            email
          }
          startTime
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
            pushToken
            jobs {
              __typename
              nextToken
            }
            name
            username
            email
          }
          startTime
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
          pushToken
          jobs {
            __typename
            items {
              __typename
              id
              title
              duration
              status
              startTime
            }
            nextToken
          }
          name
          username
          email
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
          pushToken
          jobs {
            __typename
            items {
              __typename
              id
              title
              duration
              status
              startTime
            }
            nextToken
          }
          name
          username
          email
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
          pushToken
          jobs {
            __typename
            items {
              __typename
              id
              title
              duration
              status
              startTime
            }
            nextToken
          }
          name
          username
          email
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
  async CreateShutDown(
    input: CreateShutDownInput
  ): Promise<CreateShutDownMutation> {
    const statement = `mutation CreateShutDown($input: CreateShutDownInput!) {
        createShutDown(input: $input) {
          __typename
          id
          expectedTimeHrs
          startTime
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateShutDownMutation>response.data.createShutDown;
  }
  async UpdateShutDown(
    input: UpdateShutDownInput
  ): Promise<UpdateShutDownMutation> {
    const statement = `mutation UpdateShutDown($input: UpdateShutDownInput!) {
        updateShutDown(input: $input) {
          __typename
          id
          expectedTimeHrs
          startTime
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateShutDownMutation>response.data.updateShutDown;
  }
  async DeleteShutDown(
    input: DeleteShutDownInput
  ): Promise<DeleteShutDownMutation> {
    const statement = `mutation DeleteShutDown($input: DeleteShutDownInput!) {
        deleteShutDown(input: $input) {
          __typename
          id
          expectedTimeHrs
          startTime
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteShutDownMutation>response.data.deleteShutDown;
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
            pushToken
            jobs {
              __typename
              nextToken
            }
            name
            username
            email
          }
          startTime
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
              pushToken
              name
              username
              email
            }
            startTime
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
          pushToken
          jobs {
            __typename
            items {
              __typename
              id
              title
              duration
              status
              startTime
            }
            nextToken
          }
          name
          username
          email
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
            pushToken
            jobs {
              __typename
              nextToken
            }
            name
            username
            email
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
  async GetShutDown(id: string): Promise<GetShutDownQuery> {
    const statement = `query GetShutDown($id: ID!) {
        getShutDown(id: $id) {
          __typename
          id
          expectedTimeHrs
          startTime
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetShutDownQuery>response.data.getShutDown;
  }
  async ListShutDowns(
    filter?: ModelShutDownFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListShutDownsQuery> {
    const statement = `query ListShutDowns($filter: ModelShutDownFilterInput, $limit: Int, $nextToken: String) {
        listShutDowns(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            expectedTimeHrs
            startTime
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
    return <ListShutDownsQuery>response.data.listShutDowns;
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
            pushToken
            jobs {
              __typename
              nextToken
            }
            name
            username
            email
          }
          startTime
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
            pushToken
            jobs {
              __typename
              nextToken
            }
            name
            username
            email
          }
          startTime
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
            pushToken
            jobs {
              __typename
              nextToken
            }
            name
            username
            email
          }
          startTime
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
          pushToken
          jobs {
            __typename
            items {
              __typename
              id
              title
              duration
              status
              startTime
            }
            nextToken
          }
          name
          username
          email
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
          pushToken
          jobs {
            __typename
            items {
              __typename
              id
              title
              duration
              status
              startTime
            }
            nextToken
          }
          name
          username
          email
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
          pushToken
          jobs {
            __typename
            items {
              __typename
              id
              title
              duration
              status
              startTime
            }
            nextToken
          }
          name
          username
          email
        }
      }`
    )
  ) as Observable<OnDeletePersonSubscription>;

  OnCreateShutDownListener: Observable<
    OnCreateShutDownSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateShutDown {
        onCreateShutDown {
          __typename
          id
          expectedTimeHrs
          startTime
        }
      }`
    )
  ) as Observable<OnCreateShutDownSubscription>;

  OnUpdateShutDownListener: Observable<
    OnUpdateShutDownSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateShutDown {
        onUpdateShutDown {
          __typename
          id
          expectedTimeHrs
          startTime
        }
      }`
    )
  ) as Observable<OnUpdateShutDownSubscription>;

  OnDeleteShutDownListener: Observable<
    OnDeleteShutDownSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteShutDown {
        onDeleteShutDown {
          __typename
          id
          expectedTimeHrs
          startTime
        }
      }`
    )
  ) as Observable<OnDeleteShutDownSubscription>;
}
